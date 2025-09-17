import { PrismaClient } from "@prisma/client"
import { redirect } from "next/navigation"
import { revalidatePath } from "next/cache"

const prisma = new PrismaClient()

export default async function page() {

  const data = await prisma.comment.findMany({
    orderBy: {
      createdAt: 'desc',
    },
    select: {
      id: true,
      comment: true,
    },
  })

  async function addComment(formData: FormData) {
    'use server'
    const id = formData.get('id') as string
    const comment = formData.get('comment') as string
    await prisma.comment.create({
      data: {
        id,
        comment,
      },
    })
    revalidatePath('/testbdd')
    redirect("/testbdd")
  }


  return (
    <div>
      <h1 className="text-4xl font-medium mb-4">Test BDD</h1>
      <div>{data.map((d) => <p key={d.id}>{d.comment}</p>)}</div>
      <form action={addComment} className="flex flex-col my-10 justify-start space-y-4">
        <input name="id" type="text" placeholder="Entrer l'ID" className="bg-neutral-200 w-50 rounded px-2 py-1"/>
        <input name="comment" type="text" placeholder="Entrer le commentaire" className="bg-neutral-200 w-50 rounded px-2 py-1"/>
        <button className="bg-neutral-300 hover:bg-neutral-400 rounded px-2 py-1 w-50" type="submit">Submit</button>
      </form>
    </div>
  )
}
