import { Request, Response } from "express";
import { prisma } from "../lib/prisma";
import {
  contract_status,
  milestone_status,
  projectStatus,
} from "../types/types";

export const submitMilestone = async (req: Request, res: Response) => {
  const milestoneId = req.params.milestoneId?.toString();
  const userId = req.id;

  try {
    const milestone = await prisma.milestones.findUnique({
      where: { id: milestoneId! },
      include: {
        contract: {
          select: { freelancer_id: true },
        },
      },
    });

    if (!milestone) {
      return res.status(404).json({
        success: false,
        data: null,
        error: "MILESTONE_NOT_FOUND",
      });
    }

    if (milestone.contract.freelancer_id !== userId) {
      return res.status(403).json({
        success: false,
        data: null,
        error: "FORBIDDEN",
      });
    }

    if (milestone.status !== milestone_status.PENDING) {
      return res.status(400).json({
        success: false,
        data: null,
        error: "MILESTONE_ALREADY_SUBMITTED",
      });
    }

    const allMilestones = await prisma.milestones.findMany({
      where: {
        contract_id: milestone.contract_id,
      },
      orderBy: {
        order_index: "asc",
      },
    });

    const currentPending = allMilestones.find(
      (x) => x.status !== milestone_status.APPROVED,
    );

    if (currentPending?.id !== milestoneId) {
      return res.status(400).json({
        success: false,
        data: null,
        error: "PREVIOUS_MILESTONE_INCOMPLETE",
      });
    }

    const submit = await prisma.milestones.update({
      where: { id: milestoneId! },
      data: { status: milestone_status.SUBMITTED },
    });

    res.status(200).json({
      success: true,
      data: submit,
      error: null,
    });
  } catch (error) {
    console.log(error);
  }
};

export const approveMilestone = async (req: Request, res: Response) => {
  const milestoneId = req.params.milestoneId?.toString();
  const userId = req.id;

  try {
    const milestone = await prisma.milestones.findUnique({
      where: { id: milestoneId! },
      include: {
        contract: {
          select: { client_id: true },
        },
      },
    });

    if (!milestone) {
      return res.status(404).json({
        success: false,
        data: null,
        error: "MILESTONE_NOT_FOUND",
      });
    }

    if (milestone.contract.client_id !== userId) {
      return res.status(403).json({
        success: false,
        data: null,
        error: "FORBIDDEN",
      });
    }

    if (milestone.status === milestone_status.APPROVED) {
      return res.status(400).json({
        success: false,
        data: null,
        error: "MILESTONE_ALREADY_APPROVED",
      });
    }

    if (milestone.status !== milestone_status.SUBMITTED) {
      return res.status(400).json({
        success: false,
        data: null,
        error: "MILESTONE_NOT_SUBMITTED",
      });
    }

    const lastMilestone = await prisma.milestones.findFirst({
      where: {
        contract_id: milestone.contract_id,
      },
      orderBy: {
        order_index: "desc",
      },
    });

    const isLastMilestone = lastMilestone?.id === milestoneId ? true : false;

    const result = await prisma.$transaction(async (tx) => {
      const update = await tx.milestones.update({
        where: { id: milestoneId! },
        data: { status: milestone_status.APPROVED, approved_at: new Date() },
        include: { contract: { select: { project_id: true } } },
      });

      if (!isLastMilestone) {
        await tx.contracts.update({
          where: { id: update.contract_id },
          data: { status: contract_status.COMPLETED, completed_at: new Date() },
        });

        await tx.projects.update({
          where: { id: update.contract.project_id },
          data: { status: projectStatus.COMPLETED },
        });
      }
      return update;
    });

    res.status(200).json({
      success: true,
      data: {
        id: result.id,
        contractId: result.contract_id,
        title: result.title,
        status: result.status,
        approvedAt: result.approved_at,
      },
      error: null,
    });
  } catch (error) {
    console.log(error);
  }
};
