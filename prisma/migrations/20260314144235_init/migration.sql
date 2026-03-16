-- CreateEnum
CREATE TYPE "role" AS ENUM ('client', 'freelancer');

-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "role" "role" NOT NULL,
    "bio" TEXT,
    "skills" JSONB NOT NULL DEFAULT '[]',
    "hourly_rate" DECIMAL(10,2) NOT NULL,
    "profile_image" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");
