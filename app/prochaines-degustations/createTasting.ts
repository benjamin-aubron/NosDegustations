"use server"
import { PrismaClient } from "@prisma/client"
import { revalidatePath } from "next/cache"
import { toSnakeCase } from "@/lib/utils"

const prisma = new PrismaClient()

export default async function createTasting(formData: FormData) {
  
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

  async function addComment(formData: FormData) {
    'use server'
    const appelation = formData.get('appelation') as string
    const region = formData.get('region') as string

    await prisma.vin.create({
      data: {
        id: toSnakeCase(appelation),
        appelation,
        region,
        tasted: false,
        type: "vin rouge",
      },
    })
    revalidatePath('/prochaines-degustations')
  }


}