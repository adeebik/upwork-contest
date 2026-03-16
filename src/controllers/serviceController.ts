import { Request, Response } from "express";
import { prisma } from "../lib/prisma";
import { servicesSchema } from "../validations/schema";

export const createService = async (req: Request, res: Response) => {
  const freelancerId = req.id;
  const parsedData = servicesSchema.safeParse(req.body);
  if (!parsedData.success) {
    return res.status(400).json({
      success: false,
      data: null,
      error: "INVALID_REQUEST",
    });
  }

  const { title, description, category, pricingType, price, deliveryDays } =
    parsedData.data;

  try {
    const data = await prisma.services.create({
      data: {
        freelancer_id: freelancerId!?.toString(),
        title,
        description,
        category,
        price,
        pricing_type: pricingType,
        delivery_days: deliveryDays,
      },
    });

    res.status(201).json({
      success: true,
      data: {
        id: data.id,
        freelancerId: data.freelancer_id,
        title: data.title,
        description: data.description,
        category: data.category,
        pricingType: data.pricing_type,
        price: data.price,
        deliveryDays: data.delivery_days,
        rating: data.rating,
        totalReviews: data.total_reviews,
      },
      error: null,
    });
  } catch (error) {
    console.log("Services error : ", error);
  }
};
