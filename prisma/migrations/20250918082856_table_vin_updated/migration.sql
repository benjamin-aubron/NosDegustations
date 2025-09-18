/*
  Warnings:

  - Added the required column `appelation` to the `vin` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."vin" ADD COLUMN     "appelation" TEXT NOT NULL,
ALTER COLUMN "tastingDate" DROP NOT NULL,
ALTER COLUMN "domain" DROP NOT NULL,
ALTER COLUMN "year" DROP NOT NULL,
ALTER COLUMN "alcohol" DROP NOT NULL,
ALTER COLUMN "photo" DROP NOT NULL,
ALTER COLUMN "cepage" DROP NOT NULL,
ALTER COLUMN "noteClem" DROP NOT NULL,
ALTER COLUMN "commentClem" DROP NOT NULL,
ALTER COLUMN "noteBenji" DROP NOT NULL,
ALTER COLUMN "commentBenji" DROP NOT NULL;
