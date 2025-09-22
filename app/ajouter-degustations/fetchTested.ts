"use server"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export default async function fetchTested() {

  const data = await prisma.vin.findMany({
    where: {
      tasted: true,
    },
    select: {
      id: true,
      appelation: true,
      region: true,
      alcohol: true,
      year: true,
    },
  }
  )
  return data
}