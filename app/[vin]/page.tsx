import Link from "next/link"
import PieChart from "@/components/PieChart"
import Comment from "@/components/Comment"
import WineImage from "@/components/WineImage"
import { toPascalCase } from "@/lib/utils"
import { Cepage } from "@/utils/types"
import fetchSelected from "@/app/(modif)/ajouter-degustations/fetchSelected"
import NotFound from "@/app/not-found"
import { PencilLine, ArrowLeft, Grape, Calendar, Wine } from "lucide-react"

export default async function Page({ params }: { params: Promise<{ vin: string }> }) {
  const { vin } = await params

  const selectedWine = await fetchSelected(vin)
  if (!selectedWine) return <NotFound />

  const cepages: Cepage[] = Array.isArray(selectedWine?.cepage)
    ? selectedWine.cepage as Cepage[]
    : []

  return (
    <div className="space-y-4">
      {/* Mobile */}
      <div className="bloc md:hidden relative">
        <div className="flex justify-between pb-1">
          <Link href={`/`} className="flex items-center gap-1 text-lg hover:bg-neutral-200 rounded-xl w-fit pl-2 pr-3 py-2"><ArrowLeft className="w-5 h-5" /> Retour</Link>
          <Link href={`/modifier-degustation/${selectedWine?.id}`} className="cursor-pointer hover:bg-neutral-200 ml-4 mt-1 px-2 py-1 rounded mr-2">
            <PencilLine className="w-6 h-8 text-neutral-500" />
          </Link>
        </div>
        <div className="w-full h-[300px] bg-neutral-200 rounded-2xl flex flex-col justify-center items-center overflow-hidden relative">
          <WineImage vinId={vin} alt={`${vin} image`} />
        </div>
        <div className="absolute bottom-2 left-2 backdrop-blur bg-neutral-300/60 rounded-lg py-1 px-2 flex flex-col gap-2">
          <div>
            <h1 className="text-2xl font-medium">{selectedWine?.appelation}</h1>
          </div>
          <div className="">
            <div className="text-neutral-800 font-medium">{selectedWine?.region}</div>
            <div className="text-neutral-500 font-medium">{selectedWine?.domain}</div>
          </div>
        </div>
      </div>
      {/* Desktop */}
      <div className="hidden md:grid grid-cols-2 gap-4">
        <div className="p-4">
          <div className="flex justify-between mb-8">
            <Link href={`/`} className="flex items-center gap-1 text-lg hover:bg-neutral-200 rounded-xl w-fit pl-2 pr-3 py-2"><ArrowLeft className="w-5 h-5" /> Retour</Link>
            <Link href={`/modifier-degustation/${selectedWine?.id}`} className="cursor-pointer hover:bg-neutral-200 ml-4 mt-1 px-2 py-1 rounded mr-2">
              <PencilLine className="w-6 h-8 text-neutral-500" />
            </Link>
          </div>
          <div className="flex justify-start items-bottom">
            <h1 className="text-4xl font-medium">{selectedWine?.appelation}</h1>
          </div>
          <div className="pt-4">
            <div className="text-neutral-800 font-medium text-lg">{selectedWine?.region}</div>
            <div className="text-neutral-500 font-medium text-lg">{selectedWine?.domain}</div>
          </div>
        </div>
        <div className="w-full h-[300px] bg-neutral-200 rounded-2xl flex flex-col justify-center items-center overflow-hidden relative">
          <WineImage vinId={vin} alt={`${vin} image`} />
        </div>
      </div>
      <div className="bg-neutral-200 rounded-2xl p-4 space-y-2">
        <div>Dégusté le : {selectedWine?.tastingDate ? selectedWine?.tastingDate?.toLocaleDateString('fr-FR', {
          weekday: 'short',
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        }) : "Non renseigné"}
        </div>
        <div className="flex justify-between">
          <p className="flex items-center"><Grape className="w-4 h-4 mr-[6px]" />{toPascalCase(selectedWine?.type ?? "")}</p>
          <p className="flex items-center"><Calendar className="w-4 h-4 mr-[6px]" />{selectedWine?.year ? selectedWine?.year : "Non renseigné"}</p>
          <p className="flex items-center"><Wine className="w-4 h-4 mr-[6px]" />{selectedWine?.alcohol ? `${selectedWine?.alcohol}°` : "Non renseigné"}</p>
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
                    <span>{cep?.pourcentage == 0 ? "" : `${cep?.pourcentage} %`}</span>
                  </div>
                </li>)) : <div className="-ml-5">Aucun cépage renseigné</div>}
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
