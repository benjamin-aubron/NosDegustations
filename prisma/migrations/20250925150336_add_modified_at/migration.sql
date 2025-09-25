/*
  Warnings:

  - Added the required column `modifiedAt` to the `vin` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."vin" ADD COLUMN     "modifiedAt" TIMESTAMP(3) NOT NULL;
