"use server"
import prisma from "@/lib/prisma"

export default async function fetchSelected(id: string) {

  const data = await prisma.vin.findUnique({
    where: {
      id: id,
    }
  }
  )
  return data
}