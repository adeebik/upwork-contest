import express from "express";
import z from "zod";
import { prisma } from "./lib/prisma";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { auth, roleAuth } from "./middleware";
const app = express();
app.use(express.json());
export var role;
(function (role) {
    role["CLIENT"] = "client";
    role["FREELACNER"] = "freelancer";
})(role || (role = {}));
var pricing_type;
(function (pricing_type) {
    pricing_type["FIXED"] = "fixed";
    pricing_type["HOURLY"] = "hourly";
})(pricing_type || (pricing_type = {}));
var status;
(function (status) {
    status["OPEN"] = "open";
    status["IN_PROGRESS"] = "in_progress";
    status["COMPLETED"] = "completed";
    status["CANCELLED"] = "cancelled";
})(status || (status = {}));
var proposal_status;
(function (proposal_status) {
    proposal_status["PENDING"] = "pending";
    proposal_status["ACCEPTED"] = "accepted";
    proposal_status["REJECTED"] = "rejected";
})(proposal_status || (proposal_status = {}));
var contract_status;
(function (contract_status) {
    contract_status["ACTIVE"] = "active";
    contract_status["COMPLETED"] = "completed";
    contract_status["CANCELLED"] = "cancelled";
})(contract_status || (contract_status = {}));
var milestone_status;
(function (milestone_status) {
    milestone_status["PENDING"] = "pending";
    milestone_status["SUBMITTED"] = "submitted";
    milestone_status["APPROVED"] = "approved";
    milestone_status["REJECTED"] = "rejected";
})(milestone_status || (milestone_status = {}));
const singupSchema = z.object({
    name: z.string().min(1),
    email: z.email().min(1),
    password: z.string().min(1),
    role: z.enum(role).optional().default(role.CLIENT),
    bio: z.string().optional(),
    skills: z.array(z.string()).optional().default([]),
    hourlyRate: z.int().optional(),
});
app.post("api/auth/signup", async (req, res) => {
    const parsedData = singupSchema.safeParse(req.body);
    if (!parsedData.success) {
        return res.status(400).json({
            success: false,
            data: null,
            error: "INVALID_REQUEST",
        });
    }
    const { name, email, password, role, bio, skills, hourlyRate } = parsedData.data;
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
    }
    catch (error) {
        res.status(400).json({
            success: false,
            data: null,
            error: "EMAIL_ALREADY_EXISTS",
        });
    }
});
const loginSchema = z.object({
    email: z.email().min(1),
    password: z.string().min(1),
});
app.post("api/auth/login", async (req, res) => {
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
        const token = jwt.sign({ id: user.id, role: user.role }, process.env.JWT_SECRET, { expiresIn: "7d" });
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
    }
    catch (error) {
        console.log("login error: ", error);
    }
});
const servicesSchema = z.object({
    title: z.string().min(1),
    description: z.string().min(1),
    category: z.string().min(1),
    pricingType: z.enum(pricing_type),
    price: z.int(),
    deliveryDays: z.int(),
});
app.post("/api/services", auth, roleAuth(role.FREELACNER), async (req, res) => {
    const freelancerId = req.id;
    const parsedData = servicesSchema.safeParse(req.body);
    if (!parsedData.success) {
        return res.status(400).json({
            success: false,
            data: null,
            error: "INVALID_REQUEST",
        });
    }
    const { title, description, category, pricingType, price, deliveryDays } = parsedData.data;
    try {
        const data = await prisma.services.create({
            data: {
                freelancer_id: freelancerId?.toString(),
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
    }
    catch (error) {
        console.log("Services error : ", error);
    }
});
const projectSchema = z.object({
    title: z.string().min(1),
    description: z.string().min(1),
    category: z.string().min(1),
    budgetMin: z.int(),
    budgetMax: z.int(),
    deadline: z.iso.datetime(),
    requiredSkills: z.array(z.string()).optional().default([]),
});
app.post("api/projects", auth, roleAuth(role.CLIENT), async (req, res) => {
    const client_id = req.id;
    const parsedData = projectSchema.safeParse(req.body);
    if (!parsedData.success) {
        return res.status(400).json({
            success: false,
            data: null,
            error: "INVALID_REQUEST",
        });
    }
    const { title, description, category, budgetMin, budgetMax, deadline, requiredSkills, } = parsedData.data;
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
                deadline: new Date(deadline),
                required_skills: requiredSkills,
                client_id: client_id,
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
    }
    catch (error) {
        console.log("project error : ", error);
    }
});
app.listen(3000);
//# sourceMappingURL=index.js.map