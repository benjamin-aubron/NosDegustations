"use server"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export default async function fetchTasting() {

  const data = await prisma.vin.findMany({
    where: {
      tasted: false,
    },
    select: {
      id: true,
      appelation: true,
      region: true,
    },
  }
  )
  return data
}