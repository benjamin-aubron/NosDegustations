import { data } from "@/db/data"
import PieChart from "@/components/PieChart"
import { Cepage } from "@/utils/types"
import Comment from "@/components/Comment"
import { toPascalCase } from "@/lib/utils"

export default async function Page({ params }: { params: Promise<{ vin: string }> }) {
  const { vin } = await params

  const selectedWine = data.find((d) => d.id === vin)
  const cepages: Cepage[] = selectedWine?.cepages ?? []

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div className="p-4">
          <h1 className="text-4xl font-medium">{selectedWine?.appelation}</h1>
          <div className="pt-4">
            <div className="text-neutral-800 font-medium text-lg">{selectedWine?.region}</div>
            <div className="text-neutral-500 font-medium text-lg">{selectedWine?.domaine}</div>
          </div>
        </div>
        <div className="w-full h-[300px] bg-neutral-300 rounded-2xl flex flex-col justify-center items-center">
          Image
        </div>
      </div>
      <div className="bg-neutral-200 rounded-2xl p-4">
        <div>Dégusté le : {selectedWine?.date?.toLocaleDateString('fr-FR', {
          weekday: 'short',
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        })}
        </div>
        <div className="flex justify-between">
          <p>Type : {toPascalCase(selectedWine?.type ?? "")}</p>
          <p>Année : {selectedWine?.annee}</p>
          <p>Alcool : {selectedWine?.alcool}°</p>
        </div>
      </div>
      <div className="bg-neutral-200 rounded-2xl p-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="">
            <h2 className="text-xl">Cépages</h2>
            <ul className="list-disc pl-5 pt-4">
              {selectedWine?.cepages?.map((cepage) => (
                <li key={cepage.cepage}>
                  <div className="flex max-w-[200px] justify-between">
                    <span>{cepage.cepage}</span>
                    <span>{cepage.pourcentage}%</span>
                  </div>
                </li>))}
            </ul>
          </div>
          <div>
            <PieChart type={selectedWine?.type ?? ""} chartData={cepages} />
          </div>
        </div>
      </div>
      <Comment name="clem" />
      <Comment name="benji" />
    </div>
  )
}
