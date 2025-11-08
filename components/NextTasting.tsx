import { Plus } from "lucide-react"
import Link from "next/link"
import fetchTasting from "@/app/(modif)/prochaines-degustations/fetchTasting"
import {
  Card,
} from "@/components/ui/card"


export default async function NextTasting() {

  const data = await fetchTasting()

  const groupedByRegion = data?.reduce((acc, item) => {
    const region = item.region
    if (!acc[region]) {
      acc[region] = []
    }
    acc[region].push(item)
    return acc
  }, {} as Record<string, typeof data>)

  return (
    <div>
      <div className="flex justify-between items-center mt-6 mb-2">
        <h2 className="text-2xl md:px-1 text-primary font-bold">Prochaines dégustations</h2>
        <Link href={"/prochaines-degustations"} className="cursor-pointer hover:bg-primary px-2 py-1 rounded-full mr-2 group">
          <Plus className="w-6 h-8 text-primary group-hover:text-white" />
        </Link>
      </div>
      {groupedByRegion && Object.entries(groupedByRegion).map(([region, wines]) => (
        <Card key={region} className="p-4 block">
          <div className="font-semibold pb-4">{region}</div>
          <ul>
            {wines.map((wine) => (
              <div className="flex items-center space-x-2">
                <div className="w-[6px] h-[6px] bg-neutral-700 rounded-full"></div>
                <li key={wine.id}>{wine.appelation}</li>
              </div>
            ))}
          </ul>
        </Card>
      ))}
    </div>
  )
}
