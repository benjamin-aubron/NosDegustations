import TestedCard from "@/components/TestedCard"
import { Plus } from "lucide-react"
import Link from "next/link"
import fetchTested from "@/app/ajouter-degustations/fetchTested"

export default async function Tested() {

  const data = await fetchTested()

  return (
    <div>
      <div className="flex justify-between items-end">
        <h2 className="text-2xl mt-6 mb-4 px-2">Prochaines dégustations</h2>
        <Link href={"/ajouter-degustations"} className="cursor-pointer hover:bg-neutral-200 px-2 py-1 rounded-full mr-2 mb-2">
          <Plus className="w-6 h-8 text-neutral-500" />
        </Link>
      </div>
      {data.map((d) => (
        <TestedCard key={d.id} id={d.id} appelation={d.appelation} alcohol={Number(d.alcohol)} region={d.region} year={Number(d.year)} />
      ))}
    </div>
  )
}