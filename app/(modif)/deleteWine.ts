"use server"
import prisma from "@/lib/prisma"
import { del } from '@vercel/blob'
import { revalidatePath } from "next/cache"

export default async function deleteWine(id: string) {
  // Delete image if tested wine
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
  revalidatePath("/")
}