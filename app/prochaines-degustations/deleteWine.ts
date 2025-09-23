"use server"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export default async function deleteWine(id: string) {
  await prisma.vin.delete({
    where: {
      id: id,
    },
  })
}