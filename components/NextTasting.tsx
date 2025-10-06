import ToBeTestedCard from "./NextTastingCard"
import { Plus } from "lucide-react"
import Link from "next/link"
import fetchTasting from "@/app/prochaines-degustations/fetchTasting"


export default async function NextTasting() {

  const data = await fetchTasting()

  return (
    <div>
      <div className="flex justify-between items-center mt-6 mb-2">
        <h2 className="text-2xl px-2 text-primary font-bold">Prochaines dégustations</h2>
        <Link href={"/prochaines-degustations"} className="cursor-pointer hover:bg-primary px-2 py-1 rounded-full mr-2 group">
          <Plus className="w-6 h-8 text-primary group-hover:text-white" />
        </Link>
      </div>
      {data?.map((d) => (
        <ToBeTestedCard key={d.id} id={d.id} appelation={d.appelation} region={d.region} />
      ))}
    </div>
  )
}
