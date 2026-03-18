import { Request, Response } from "express";
import { prisma } from "../lib/prisma";
import { milestone_status, role } from "../types/types";

export const getContracts = async (req: Request, res: Response) => {
  const userId = req.id;
  const userRole = req.role;

  try {
    const where: any = {};

    if (userRole === role.FREELANCER) {
      where.freelancer_id = { equals: userId };
    }
    if (userRole === role.CLIENT) {
      where.client_id = { equals: userId };
    }
    const data = await prisma.contracts.findMany({
      where,
      include: {
        freelancer: { select: { name: true } },
        client: { select: { name: true } },
        project: { select: { title: true } },
        milestones: {
          select: {
            id: true,
            title: true,
            status: true,
            due_date: true,
          },
        },
      },
    });

    const contracts = data.map((x) => {
      const currentMilestone = x.milestones.find((m) => {
        m.status !== milestone_status.APPROVED || null;
      });
      return {
        ...x,
        currentMilestone,
      };
    });

    res.status(200).json({
      success: true,
      data: contracts.map((c) => ({
        id: c.id,
        projectId: c.project_id,
        projectTitle: c.project.title,
        freelancerId: c.freelancer_id,
        freelancerName: c.freelancer.name,
        clientId: c.client_id,
        clientName: c.client.name,
        totalAmount: c.total_amount,
        status: c.status,
        startedAt: c.started_at,
        completedAt: c.completed_at,
        currentMilestone: c.currentMilestone
          ? {
              id: c.currentMilestone?.id,
              title: c.currentMilestone?.title,
              status: c.currentMilestone?.status,
              dueDate: c.currentMilestone?.due_date,
            }
          : null,
      })),
      error: null,
    });
  } catch (error) {
    console.log(error);
  }
};
