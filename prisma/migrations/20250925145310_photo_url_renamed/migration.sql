/*
  Warnings:

  - You are about to drop the column `photo` on the `vin` table. All the data in the column will be lost.
  - You are about to drop the `comment` table. If the table is not empty, all the data it contains will be lost.

*/
-- AlterTable
ALTER TABLE "public"."vin" DROP COLUMN "photo",
ADD COLUMN     "photoUrl" TEXT;

-- DropTable
DROP TABLE "public"."comment";
