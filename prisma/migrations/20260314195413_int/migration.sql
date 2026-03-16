/*
  Warnings:

  - You are about to alter the column `hourly_rate` on the `users` table. The data in that column could be lost. The data in that column will be cast from `Decimal(10,2)` to `Integer`.

*/
-- AlterTable
ALTER TABLE "users" ALTER COLUMN "hourly_rate" SET DATA TYPE INTEGER;
