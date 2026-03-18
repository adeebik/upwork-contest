import { Request, Response } from "express";
import { prisma } from "../lib/prisma";
import { reviewSchema } from "../validations/schema";
import { contract_status, role } from "../types/types";

export const submitReview = async (req: Request, res: Response) => {
  const userId = req.id;
  const userRole = req.role;

  const parsedData = reviewSchema.safeParse(req.body);
  if (!parsedData.success) {
    return res.status(400).json({
      success: false,
      data: null,
      error: "INVALID_REQUEST",
    });
  }

  const { contractId, rating, comment } = parsedData.data;

  try {
    const contract = await prisma.contracts.findUnique({
      where: { id: contractId },
    });

    if (!contract) {
      return res.status(404).json({
        success: false,
        data: null,
        error: "CONTRACT_NOT_FOUND",
      });
    }

    if (contract.status !== contract_status.COMPLETED) {
      return res.status(400).json({
        success: false,
        data: null,
        error: "CONTRACT_NOT_COMPLETED",
      });
    }

    if (userId !== contract.freelancer_id && userId !== contract.client_id) {
      return res.status(403).json({
        success: false,
        data: null,
        error: "FORBIDDEN",
      });
    }

    const alreadyReview = await prisma.reviews.findUnique({
      where: {
        contract_review: {
          contract_id: contractId,
          reviewer_id: userId,
        },
      },
    });

    if (alreadyReview) {
      return res.status(400).json({
        success: false,
        data: null,
        error: "ALREADY_REVIEWED",
      });
    }

    const clientId = contract.client_id;
    const freelancerId = contract.freelancer_id;

    const result = await prisma.$transaction(async (tx) => {
      const create = await tx.reviews.create({
        data: {
          contract_id: contractId,
          comment: comment,
          rating: rating,
          reviewer_id: userId,
          reviewee_id: userId === clientId ? freelancerId : clientId,
        },
      });

      if (userId === clientId) {
        const service = await tx.services.findFirst({
          where: {
            freelancer_id: freelancerId,
          },
        });

        if (service) {
          const newRating =
            (service.rating.toNumber() * service?.total_reviews + rating) /
            (service?.total_reviews + 1);
          const totalReviews = service?.total_reviews + 1;

          await tx.services.update({
            where: { id: service.id },
            data: { rating: newRating, total_reviews: totalReviews },
          });
        }
      }

      return create;
    });

    res.status(201).json({
      success: true,
      data: result,
      error: null,
    });
  } catch (error) {
    console.log(error);
  }
};
