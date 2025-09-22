/*
  Warnings:

  - The `year` column on the `vin` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `alcohol` column on the `vin` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "public"."vin" DROP COLUMN "year",
ADD COLUMN     "year" INTEGER,
DROP COLUMN "alcohol",
ADD COLUMN     "alcohol" INTEGER;
