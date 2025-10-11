"use server"
import prisma from "@/lib/prisma"
import { revalidatePath } from "next/cache"
import { toSnakeCase } from "@/lib/utils"
import zod from "zod"

const formSchema = zod.object({
  appelation: zod.string().min(2, {
    message: "L'appelation doit contenir au moins 2 caractères",
  }),
  region: zod.string().min(2, {
    message: "La région doit contenir au moins 2 caractères",
  }),
})

export default async function createTasting(formData: FormData) {

  const rawData = {
    appelation: formData.get('appelation') as string,
    region: formData.get('region') as string,
  }

  try {
    const validatedData = formSchema.parse(rawData)
    const { appelation, region } = validatedData
    
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
    console.log("Tasting créé avec succès", { appelation, region })
    
  } catch{
    console.log("🔴 Erreur de validation ou dans la DB -> menez l'enquête")
  }
}