import TestedCard from "@/components/TestedCard"
import { Plus } from "lucide-react"
import Link from "next/link"
import fetchTested from "@/app/ajouter-degustations/fetchTested"

export default async function Tested() {

  const data = await fetchTested()

  return (
    <div>
      <div className="flex justify-between items-center mt-6 mb-2">
        <h2 className="text-2xl px-2 text-primary font-bold">Nos dégustations</h2>
        <Link href={"/ajouter-degustations"} className="cursor-pointer hover:bg-primary px-2 py-1 rounded-full mr-2 group">
          <Plus className="w-6 h-8 text-primary group-hover:text-white" />
        </Link>
      </div>
      {data.map((d) => (
        <TestedCard key={d.id} id={d.id} appelation={d.appelation} alcohol={Number(d.alcohol)} region={d.region} year={Number(d.year)} />
      ))}
    </div>
  )
}