"use server"
import prisma from "@/lib/prisma"

export default async function fetchTested() {

  const data = await prisma.vin.findMany({
    where: {
      tasted: true,
    }
  }
  )
  return data
}