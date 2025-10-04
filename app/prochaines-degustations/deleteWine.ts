"use server"
import { PrismaClient } from "@prisma/client"
import { del } from '@vercel/blob'

const prisma = new PrismaClient()

export default async function deleteWine(id: string) {
  try {
    const blobUrl = `https://uolzb0jhuaocohjh.public.blob.vercel-storage.com/${id}.avif`
    await del(blobUrl)
  } catch (error) {
    console.log("Aucune image à supprimer pour ce vin")
  }

  await prisma.vin.delete({
    where: {
      id: id,
    },
  })
}