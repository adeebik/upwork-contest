import { Request, Response } from "express";
import { prisma } from "../lib/prisma";
import { milestoneSchema } from "../validations/schema";
import { projectStatus, proposal_status } from "../types/types";

export const createContract = async (req: Request, res: Response) => {
  const userId = req.id;
  const proposalId = req.params.proposalId;
  if (!proposalId) {
    return res.status(400).json({
      success: false,
      data: null,
      error: "INVALID_PROPOSAL_ID",
    });
  }
  const parsedData = milestoneSchema.safeParse(req.body);

  if (!parsedData.success) {
    return res.status(400).json({
      success: false,
      data: null,
      error: "INVALID_REQUEST",
    });
  }

  const { milestones } = parsedData.data;

  try {
    const proposal = await prisma.proposals.findUnique({
      where: { id: proposalId.toString() },
      include: { project: true },
    });

    if (!proposal) {
      return res.status(404).json({
        success: false,
        data: null,
        error: "PROPOSAL_NOT_FOUND",
      });
    }

    if (proposal.status !== proposal_status.PENDING) {
      return res.status(400).json({
        success: false,
        data: null,
        error: "PROPOSAL_ALREADY_PROCESSED",
      });
    }

    if (proposal.project.client_id !== userId) {
      return res.status(403).json({
        success: false,
        data: null,
        error: "FORBIDDEN",
      });
    }

    const proposed_price = proposal.proposed_price.toNumber();
    let totalAmount = milestones.reduce((sum, m) => sum + m.amount, 0);

    if (proposed_price !== totalAmount) {
      return res.status(400).json({
        success: false,
        data: null,
        error: "INVALID_MILESTONE_AMOUNTS",
      });
    }

    const projectId = proposal.project_id;
    const freelancerId = proposal.freelancer_id;

    const result = await prisma.$transaction(async (tx) => {
      const contract = await tx.contracts.create({
        data: {
          total_amount: totalAmount,
          client_id: userId!,
          project_id: projectId,
          freelancer_id: proposal.freelancer_id,
        },
      });

      await tx.milestones.createMany({
        data: milestones.map((m, idx) => ({
          title: m.title,
          description: m.description,
          due_date: m.dueDate,
          amount: m.amount,
          contract_id: contract.id,
          order_index: idx,
        })),
      });

      await tx.proposals.update({
        where: { id: proposalId.toString() },
        data: { status: proposal_status.ACCEPTED },
      });

      await tx.projects.update({
        where: { id: projectId },
        data: { status: projectStatus.IN_PROGRESS },
      });

      await tx.proposals.updateMany({
        where: {
          project_id: projectId,
          status: proposal_status.PENDING,
          id: { not: proposalId.toString() },
        },
        data: { status: proposal_status.REJECTED },
      });

      const fullContract = await tx.contracts.findUnique({
        where: { id: contract.id },
        include: {
          milestones: true,
          project: {
            include: {
              _count: {
                select: { proposals: true },
              },
            },
          },
        },
      });
      return fullContract;
    });

    res.status(200).json({
      success: true,
      data: {
        proposal: {
          id: proposalId,
          status: proposal_status.ACCEPTED,
        },
        contract: {
          id: result?.id,
          projectId: result?.project_id,
          freelancerId: result?.freelancer_id,
          clientId: result?.client_id,
          totalAmount: result?.total_amount,
          status: result?.status,
          startedAt: result?.started_at,
        },
        milestones: result?.milestones?.map((m) => ({
          id: m.id,
          contractId: m.contract_id,
          title: m.title,
          description: m.description,
          amount: m.amount,
          dueDate: m.due_date,
          orderIndex: m.order_index,
          status: m.status,
        })),
      },
      error: null,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      data: null,
      error: "INTERNAL_SERVER_ERROR",
    });
  }
};
