import { PrismaClient } from "@prisma/client"
import NextTastingCard from "@/components/NextTastingCard"
import { revalidatePath } from "next/cache"
import { toSnakeCase } from "@/lib/utils"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Card } from "@/components/ui/card"

const prisma = new PrismaClient()

export default async function page() {

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
        type: "Vin Rouge",
      },
    })
    revalidatePath('/prochaines-degustations')
  }

  return (
    <div>
      <Link href={`/`} className="flex items-center gap-1 text-lg hover:bg-neutral-200 rounded-lg w-fit pl-2 pr-3 py-2 mb-4"> <ArrowLeft className="w-5 h-5" /> Retour</Link>
      <h1 className="text-4xl font-medium mb-4 mt-4">Prochaines dégustations</h1>
      <h2 className="my-2 font-medium text-lg">Ajouter ou modifier une boisson</h2>
      <Card className="px-4">
        <form action={addComment}>
          <div className="flex flex-col md:flex-row gap-4 w-full">
            <input type="text" name="appelation" placeholder="Appelation" className="w-full border border-black px-2 py-1 rounded-md" />
            <input type="text" name="region" placeholder="Région" className="w-full border border-black px-2 py-1 rounded-md" />
          </div>
          <div className="flex w-full mt-4">
            <button type="submit" className="bg-neutral-300 hover:bg-neutral-400 rounded-md px-2 py-1 cursor-pointer">Ajouter ou modifier</button>
          </div>
        </form>
      </Card>
      <div className="mt-4">
        <h2 className="my-2 font-medium text-lg">Liste des dégustations</h2>
        {data.map((d) => (
          <NextTastingCard key={d.id} id={d.id} appelation={d.appelation} region={d.region} />
        ))}
      </div>
    </div>
  )
}