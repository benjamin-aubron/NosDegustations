import PieChart from "@/components/PieChart"
import { Cepage } from "@/utils/types"
import Comment from "@/components/Comment"
import { toPascalCase } from "@/lib/utils"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import fetchSelected from "@/app/ajouter-degustations/fetchSelected"
import NotFound from "@/app/not-found"

export default async function Page({ params }: { params: Promise<{ vin: string }> }) {
  const { vin } = await params

  const selectedWine = await fetchSelected(vin)
  if (!selectedWine) return <NotFound />
  console.log(selectedWine)

const cepages: Cepage[] = Array.isArray(selectedWine?.cepage) 
  ? selectedWine.cepage as Cepage[]
  : []

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div className="p-4">
          <Link href={`/`} className="flex items-center gap-1 text-lg hover:bg-neutral-200 rounded-xl w-fit pl-2 pr-3 py-2 mb-8"> <ArrowLeft className="w-5 h-5" /> Retour</Link>
          <h1 className="text-4xl font-medium">{selectedWine?.appelation}</h1>
          <div className="pt-4">
            <div className="text-neutral-800 font-medium text-lg">{selectedWine?.region}</div>
            <div className="text-neutral-500 font-medium text-lg">{selectedWine?.domain}</div>
          </div>
        </div>
        <div className="w-full h-[300px] bg-neutral-300 rounded-2xl flex flex-col justify-center items-center">
          Image
        </div>
      </div>
      <div className="bg-neutral-200 rounded-2xl p-4">
        <div>Dégusté le : {selectedWine?.tastingDate?.toLocaleDateString('fr-FR', {
          weekday: 'short',
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        })}
        </div>
        <div className="flex justify-between">
          <p>Type : {toPascalCase(selectedWine?.type ?? "")}</p>
          <p>Année : {selectedWine?.year}</p>
          <p>Alcool : {selectedWine?.alcohol}°</p>
        </div>
      </div>
      <div className="bg-neutral-200 rounded-2xl p-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="">
            <h2 className="text-xl">Cépages</h2>
            <ul className="list-disc pl-5 pt-4">
              {cepages?.length > 0 ? cepages.map((cep) => (
                <li key={cep?.cepage}>
                  <div className="flex max-w-[200px] justify-between">
                    <span>{cep?.cepage}</span>
                    <span>{cep?.pourcentage}%</span>
                  </div>
                </li>)) : <li>Aucun cépage</li>}
            </ul>
          </div>
          <div>
            <PieChart type={selectedWine?.type ?? ""} chartData={cepages} />
          </div>
        </div>
      </div>
      <Comment name="clem" content={selectedWine?.commentClem ?? ""} note={selectedWine?.noteClem ?? undefined} />
      <Comment name="benji" content={selectedWine?.commentBenji ?? ""} note={selectedWine?.noteBenji ?? undefined} />
    </div>
  )
}
