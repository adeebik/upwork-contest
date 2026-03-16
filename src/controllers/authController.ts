import { Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { loginSchema, singupSchema } from "../validations/schema";
import { prisma } from "../lib/prisma";

export const signup = async (req: Request, res: Response) => {
  const parsedData = singupSchema.safeParse(req.body);
  if (!parsedData.success) {
    return res.status(400).json({
      success: false,
      data: null,
      error: "INVALID_REQUEST",
    });
  }

  const { name, email, password, role, bio, skills, hourlyRate } =
    parsedData.data;

  try {
    const hashedPassword = await bcrypt.hash(password, 15);

    const data = await prisma.users.create({
      data: {
        name,
        email,
        passowrd: hashedPassword,
        role,
        bio: bio ? bio : null,
        skills: skills,
        hourly_rate: hourlyRate ? hourlyRate : null,
      },
    });

    res.status(201).json({
      success: true,
      data: {
        id: data.id,
        name: data.name,
        email: data.email,
        role: data.role,
        bio: data.bio,
        skills: data.skills,
        hourlyRate: data.hourly_rate,
      },
      error: null,
    });
  } catch (error) {
    console.log("singup error : ", error);
    res.status(400).json({
      success: false,
      data: null,
      error: "EMAIL_ALREADY_EXISTS",
    });
  }
};

export const login = async (req: Request, res: Response) => {
  const parsedData = loginSchema.safeParse(req.body);
  if (!parsedData.success) {
    return res.status(400).json({
      success: false,
      data: null,
      error: "INVALID_REQUEST",
    });
  }
  const { email, password } = parsedData.data;

  try {
    const user = await prisma.users.findUnique({
      where: { email },
    });

    if (!user) {
      return res.status(401).json({
        success: false,
        data: null,
        error: "INVALID_CREDENTIALS",
      });
    }

    const checkPassword = await bcrypt.compare(password, user.passowrd);
    if (!checkPassword) {
      return res.status(401).json({
        success: false,
        data: null,
        error: "INVALID_CREDENTIALS",
      });
    }

    const token = jwt.sign(
      { id: user.id, role: user.role },
      process.env.JWT_SECRET as string,
      { expiresIn: "7d" },
    );

    res.status(200).json({
      success: true,
      data: {
        token: token,
        user: {
          id: user.id,
          name: user.name,
          email: user.email,
          role: user.role,
        },
      },
      error: null,
    });
  } catch (error) {
    console.log("login error: ", error);
  }
};
