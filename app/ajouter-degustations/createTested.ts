"use server"
import { PrismaClient } from "@prisma/client"
import { toSnakeCase } from "@/lib/utils"

const prisma = new PrismaClient()

type FormValues = {
  appelation: string
  region: string
  domain?: string
  tastingDate?: string
  year?: string
  alcohol?: string
  cepage1?: string
  pourcentage1?: string
  cepage2?: string
  pourcentage2?: string
  noteClem?: string
  commentClem?: string
  noteBenji?: string
  commentBenji?: string
}

export default async function createTested(data: FormValues) {

  const appelation = data.appelation
  const region = data.region
  const domain = data.domain || null
  const tastingDate = data.tastingDate ? new Date(data.tastingDate) : null
  const year = data.year ? parseInt(data.year) : null
  const alcohol = data.alcohol ? parseFloat(data.alcohol) : null
  const cepageArray = [];
  if (data.cepage1 && data.pourcentage1) {
    cepageArray.push({ cepage: data.cepage1, pourcentage: parseInt(data.pourcentage1) });
  }
  if (data.cepage2 && data.pourcentage2) {
    cepageArray.push({ cepage: data.cepage2, pourcentage: parseInt(data.pourcentage2) });
  }
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
      tastingDate,
      year,
      alcohol,
      cepage: cepageArray,
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
      tastingDate,
      year,
      alcohol,
      cepage: cepageArray,
      noteClem,
      commentClem,
      noteBenji,
      commentBenji,
    },
  })
}
