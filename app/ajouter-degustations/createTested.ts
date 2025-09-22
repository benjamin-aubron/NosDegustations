"use server"
import { PrismaClient } from "@prisma/client"
import { toSnakeCase } from "@/lib/utils"

const prisma = new PrismaClient()

export default async function createTested(formData: FormData) {

  const appelation = formData.get('appelation') as string
  const region = formData.get('region') as string
  const domain = formData.get('domain') as string
  const year = parseInt(formData.get('year') as string)
  const alcohol = parseFloat(formData.get('alcohol') as string)
  const cepage = formData.get('cepage') as string
  const noteClem = parseInt(formData.get('noteClem') as string)
  const commentClem = formData.get('commentClem') as string
  const noteBenji = parseFloat(formData.get('noteBenji') as string)
  const commentBenji = formData.get('commentBenji') as string


  await prisma.vin.upsert({
    where: {
      id: toSnakeCase(appelation),
    },
    update: {
      appelation,
      region,
      domain,
      year,
      alcohol,
      cepage,
      noteClem,
      commentClem,
      noteBenji,
      commentBenji,
      tasted: false,
      type: "vin rouge",
    },
    create: {
      id: toSnakeCase(appelation),
      appelation,
      region,
      tasted: false,
      type: "vin rouge",
      domain,
      year,
      alcohol,
      cepage,
      noteClem,
      commentClem,
      noteBenji,
      commentBenji,
    },
  })
}
