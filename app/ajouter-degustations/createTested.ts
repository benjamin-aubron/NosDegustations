"use server"
import { PrismaClient } from "@prisma/client"
import { toSnakeCase } from "@/lib/utils"

const prisma = new PrismaClient()

type FormValues = {
  appelation: string
  region: string
  domain?: string
  year?: string
  alcohol?: string
  cepage?: string
  noteClem?: string
  commentClem?: string
  noteBenji?: string
  commentBenji?: string
}

export default async function createTested(data: FormValues) {

  const appelation = data.appelation
  const region = data.region
  const domain = data.domain || null
  const year = data.year ? parseInt(data.year) : null
  const alcohol = data.alcohol ? parseFloat(data.alcohol) : null
  const cepage = data.cepage || ""
  const noteClem = data.noteClem ? parseFloat(data.noteClem) : null
  const commentClem = data.commentClem || null
  const noteBenji = data.noteBenji ? parseFloat(data.noteBenji) : null
  const commentBenji = data.commentBenji || null


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
      tasted: true,
      type: "vin rouge",
    },
    create: {
      id: toSnakeCase(appelation),
      appelation,
      region,
      tasted: true,
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
