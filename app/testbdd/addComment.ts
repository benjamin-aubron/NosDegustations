import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export default async function addCommentToDB(id: string, comment: string) {
  const data = await prisma.comment.create({
    data: {
      id,
      comment,
    },
  })
  return data
}