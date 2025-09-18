-- CreateTable
CREATE TABLE "public"."vin" (
    "id" TEXT NOT NULL,
    "tasted" BOOLEAN NOT NULL,
    "tastingDate" TIMESTAMP(3) NOT NULL,
    "domain" TEXT NOT NULL,
    "region" TEXT NOT NULL,
    "year" TEXT NOT NULL,
    "alcohol" TEXT NOT NULL,
    "photo" TEXT NOT NULL,
    "cepage" JSONB NOT NULL,
    "noteClem" INTEGER NOT NULL,
    "commentClem" TEXT NOT NULL,
    "noteBenji" INTEGER NOT NULL,
    "commentBenji" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "vin_pkey" PRIMARY KEY ("id")
);
