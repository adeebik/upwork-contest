import { Request, Response } from "express";
import { prisma } from "../lib/prisma";
import { projectSchema, proposalSchema } from "../validations/schema";
import { projectStatus } from "../types/types";

export const createProject = async (req: Request, res: Response) => {
  const client_id = req.id;
  const parsedData = projectSchema.safeParse(req.body);
  if (!parsedData.success) {
    console.log("parsing error  :" , parsedData.error);
    
    return res.status(400).json({
      success: false,
      data: null,
      error: "INVALID_REQUEST",
    });
  }

  const {
    title,
    description,
    category,
    budgetMin,
    budgetMax,
    deadline,
    requiredSkills,
  } = parsedData.data;

  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const deadlineDate = new Date(deadline);
  deadlineDate.setHours(0, 0, 0, 0);

  if (deadlineDate <= today) {
    return res.status(400).json({
      success: false,
      data: null,
      error: "INVALID_REQUEST",
    });
  }

  if (budgetMin > budgetMax) {
    return res.status(400).json({
      success: false,
      data: null,
      error: "INVALID_REQUEST",
    });
  }

  try {
    const data = await prisma.projects.create({
      data: {
        title,
        description,
        category,
        budget_min: budgetMin,
        budget_max: budgetMax,
        deadline: deadline,
        required_skills: requiredSkills,
        client_id: client_id!,
      },
    });

    res.status(201).json({
      success: true,
      data: {
        id: data.id,
        title: data.title,
        description: data.description,
        category: data.category,
        budgetMin: data.budget_min,
        budgetMax: data.budget_max,
        deadline: data.deadline.toISOString().split("T")[0],
        status: data.status,
        requiredSkills: data.required_skills,
        createdAt: data.created_at,
        clientId : client_id
      },
      error: null,
    });
  } catch (error) {
    console.log("project error : ", error);
  }
};

export const getProject = async (req: Request, res: Response) => {
  const { category, minBudget, maxBudget, status, skills } = req.query;

  const where: any = {};

  if (category) {
    where.category = {
      equals: category,
      mode: "insensitive",
    };
  }

  if (status) {
    where.status = { equals: status };
  }

  if (minBudget) {
    where.budget_min = {
      gte: Number(minBudget),
    };
  }
  if (maxBudget) {
    where.budget_max = {
      lte: Number(maxBudget),
    };
  }

  if (skills) {
    const skillArray = (skills as string).split(",");
    where.OR = skillArray.map((s) => ({
      required_skills: {
        array_contains: [s],
      },
    }));
  }

  try {
    const data = await prisma.projects.findMany({
      where,
      include: {
        clients: {
          select: {
            name: true,
          },
        },
        proposals: { select: { id: true } },
      },
    });

    return res.status(200).json({
      success: true,
      data: data.map((d) => ({
        id: d.id,
        clientId: d.client_id,
        clientName: d.clients.name,
        title: d.title,
        description: d.description,
        category: d.category,
        budgetMin: d.budget_min,
        budgetMax: d.budget_max,
        deadline: d.deadline,
        status: d.status,
        requiredSkills: d.required_skills,
        createdAt: d.created_at,
        proposalCount: d.proposals.length,
      })),
      error: null,
    });
  } catch (error) {
    console.log(error);
  }
};

export const submitProposal = async (req: Request, res: Response) => {
  const userId = req.id;
  const projectId = req.params.projectId?.toString();
  const parsedData = proposalSchema.safeParse(req.body);
  if (!parsedData.success) {
    return res.status(400).json({
      success: false,
      data: null,
      error: "INVALID_REQUEST",
    });
  }

  const { proposedPrice, coverLetter, estimatedDuration } = parsedData.data;

  try {
    const project = await prisma.projects.findUnique({
      where: { id: projectId! },
      include: { proposals: { select: { freelancer_id: true } } },
    });

    if (!project) {
      return res.status(404).json({
        success: false,
        data: null,
        error: "PROJECT_NOT_FOUND",
      });
    }

    if (project.status !== projectStatus.OPEN) {
      return res.status(400).json({
        success: false,
        data: null,
        error: "PROJECT_NOT_OPEN",
      });
    }

    const alreadySubmitted = project.proposals.some(
      (f) => f.freelancer_id === userId,
    );

    if (alreadySubmitted) {
      return res.status(400).json({
        success: false,
        data: null,
        error: "PROPOSAL_ALREADY_EXISTS",
      });
    }

    const data = await prisma.proposals.create({
      data: {
        cover_letter: coverLetter,
        proposed_price: proposedPrice,
        estimated_duration: estimatedDuration,
        project_id: project.id,
        freelancer_id: userId!,
      },
    });

    res.status(201).json({
      success: true,
      data: data,
      error: null,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getProposal = async (req: Request, res: Response) => {
  const userId = req.id;
  const projectId = req.params.projectId?.toString();

  try {
    const project = await prisma.projects.findUnique({
      where: {
        id: projectId!,
      },
      include: {
        proposals: {
          select: {
            id: true,
            freelancer_id: true,
            freelancer: {
              select: {
                name: true,
                skills: true,
              },
            },
            cover_letter: true,
            proposed_price: true,
            estimated_duration: true,
            status: true,
            submitted_at: true,
          },
        },
      },
    });

    if (!project) {
      return res.status(404).json({
        success: false,
        data: null,
        error: "PROJECT_NOT_FOUND",
      });
    }
    if (project.client_id !== userId) {
      return res.status(403).json({
        success: false,
        data: null,
        error: "FORBIDDEN",
      });
    }

    res.status(200).json({
      success: true,
      data: project.proposals.map((p) => ({
        id: p.id,
        freelancerId: p.freelancer_id,
        freelancerName: p.freelancer.name,
        freelancerSkills: p.freelancer.skills,
        coverLetter: p.cover_letter,
        proposedPrice: p.proposed_price,
        estimatedDuration: p.estimated_duration,
        status: p.status,
        submittedAt: p.submitted_at,
      })),
      error: null,
    });
  } catch (error) {
    console.log(error);
  }
};
