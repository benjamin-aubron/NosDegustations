"use server"
import { PrismaClient } from "@prisma/client"
import { revalidatePath } from "next/cache"
import { toSnakeCase } from "@/lib/utils"

const prisma = new PrismaClient()

export default async function createTasting(formData: FormData) {

  const appelation = formData.get('appelation') as string
  const region = formData.get('region') as string

  await prisma.vin.upsert({
    where: {
      id: toSnakeCase(appelation),
    },
    update: {
      appelation,
      region,
      tasted: false,
      type: "vin rouge",
    },
    create: {
      id: toSnakeCase(appelation),
      appelation,
      region,
      tasted: false,
      type: "vin rouge",
    },
  })
  revalidatePath('/prochaines-degustations')
}