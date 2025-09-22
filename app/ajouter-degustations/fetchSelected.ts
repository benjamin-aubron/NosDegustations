"use server"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export default async function fetchTested(id: string) {

  const data = await prisma.vin.findUnique({
    where: {
      id: id,
    }
  }
  )
  return data
}