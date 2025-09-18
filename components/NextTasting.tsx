import ToBeTestedCard from "./NextTastingCard"
import { data } from "@/db/data"
import { PencilLine } from "lucide-react"
import Link from "next/link"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export default async function NextTasting() {

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

  return (
    <div>
      <div className="flex justify-between items-end">
        <h2 className="text-2xl mt-6 mb-4 px-2">Prochaines dégustations</h2>
        <Link href={"/prochaines-degustations"} className="cursor-pointer hover:bg-neutral-200 px-2 py-1 rounded mr-2 mb-2">
          <PencilLine className="w-6 h-8 text-neutral-500" />
        </Link>
      </div>
      {data.map((d) => (
        <ToBeTestedCard key={d.id} appelation={d.appelation} region={d.region} />
      ))}
    </div>
  )
}
