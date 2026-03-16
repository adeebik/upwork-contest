import { Request, Response } from "express";
import { prisma } from "../lib/prisma";
import { projectSchema } from "../validations/schema";

export const createProject = async (req: Request, res: Response) => {
  const client_id = req.id;
  const parsedData = projectSchema.safeParse(req.body);
  if (!parsedData.success) {
    console.log("schema error" , parsedData.error);
    
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

  const today = new Date()
  today.setHours(0,0,0,0)
  const deadlineDate = new Date(deadline)
  deadlineDate.setHours(0,0,0,0)

  if(deadlineDate <= today){
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
        category: data.description,
        budgetMin: data.budget_min,
        budgetMax: data.budget_max,
        deadline: data.deadline,
        status: data.status,
        requiredSkills: data.required_skills,
        createdAt: data.created_at,
      },
      error: null,
    });
  } catch (error) {
    console.log("project error : ", error);
  }
};

export const getProject =  async (req: Request, res: Response) => {
  
}