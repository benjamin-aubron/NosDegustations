"use server"
import { PrismaClient } from "@prisma/client"
import { revalidatePath } from "next/cache"

const prisma = new PrismaClient()

export default async function deleteNextTasting(id: string) {
  await prisma.vin.delete({
    where: {
      id: id,
    },
  })
  revalidatePath('/prochaines-degustations')
}