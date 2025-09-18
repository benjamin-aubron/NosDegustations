/*
  Warnings:

  - Added the required column `type` to the `vin` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."vin" ADD COLUMN     "type" TEXT NOT NULL;
