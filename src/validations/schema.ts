import z from "zod";
import { pricing_type, role } from "../types/types";

export const singupSchema = z.object({
  name: z.string().min(1),
  email: z.email().min(1),
  password: z.string().min(1),
  role: z.enum(role).optional().default(role.CLIENT),
  bio: z.string().optional(),
  skills: z.array(z.string()).optional().default([]),
  hourlyRate: z.int().optional(),
});

export const loginSchema = z.object({
  email: z.email().min(1),
  password: z.string().min(1),
});


export const servicesSchema = z.object({
  title: z.string().min(1),
  description: z.string().min(1),
  category: z.string().min(1),
  pricingType: z.enum(pricing_type),
  price: z.int(),
  deliveryDays: z.int(),
});

export const projectSchema = z.object({
  title: z.string().min(1),
  description: z.string().min(1),
  category: z.string().min(1),
  budgetMin: z.int(),
  budgetMax: z.int(),
  deadline: z.coerce.date(),
  requiredSkills: z.array(z.string()).optional().default([]),
});

export const proposalSchema = z.object({
  coverLetter : z.string().min(1),
  proposedPrice : z.int().min(1),
  estimatedDuration : z.int().min(1)
})

export const milestoneSchema = z.object({
  milestones:z.array(z.object({
    title: z.string().min(1),
    description: z.string().default(""),
    amount: z.int().min(1),
    dueDate : z.coerce.date()
  }))
})