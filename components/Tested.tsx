import { data } from "@/db/data"
import TestedCard from "@/components/TestedCard"
import { Plus } from "lucide-react"
import Link from "next/link"

export default function Tested() {
  return (
    <div>
      <div className="flex justify-between items-end">
        <h2 className="text-2xl mt-6 mb-4 px-2">Prochaines dégustations</h2>
        <Link href={"/ajouter-degustations"} className="cursor-pointer hover:bg-neutral-200 px-2 py-1 rounded-full mr-2 mb-2">
          <Plus className="w-6 h-8 text-neutral-500" />
        </Link>
      </div>
      {data.filter((d) => d.bu).map((d) => (
        <TestedCard key={d.id} id={d.id} appelation={d.appelation} alcool={d.alcool} region={d.region} annee={d.annee} domaine={d.domaine} />
      ))}
    </div>
  )
}