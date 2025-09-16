import { data } from "@/db/data"
import PieChart from "@/components/PieChart"
import { Cepage } from "@/utils/types"

export default async function Page({ params }: { params: Promise<{ vin: string }> }) {
  const { vin } = await params

  const selectedWine = data.find((d) => d.appelation === vin)
  const cepages: Cepage[] = selectedWine?.cepages ?? []
  console.log(selectedWine?.cepages)
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <h1 className="text-3xl">{selectedWine?.appelation}</h1>
          <div>
            <div>{selectedWine?.region}</div>
            <div>{selectedWine?.terroir}</div>
            <div>{selectedWine?.domaine}</div>
          </div>
        </div>
        <div className="w-full h-full bg-neutral-300 rounded-2xl flex flex-col justify-center items-center">
          Image
        </div>
      </div>
      <div className="bg-neutral-200 rounded-2xl p-4">
        <div>Dégusté le : {selectedWine?.date?.toDateString()}</div>
        <div className="flex justify-between">
          <p>Type : {selectedWine?.type}</p>
          <p>Année : {selectedWine?.annee}</p>
          <p>Alcool : {selectedWine?.alcool}°</p>
        </div>
      </div>
      <div className="bg-neutral-200 rounded-2xl p-4">
        <h2 className="text-xl">Cépages</h2>
        <div className="grid grid-cols-2 gap-4">
          <div>
            {selectedWine?.cepages?.map((cepage) => (
              <div key={cepage.cepage}>
                <span>{cepage.cepage}</span>
                <span>{cepage.pourcentage}%</span>
              </div>))}
          </div>
          <div>
            <PieChart chartData={cepages}/>
          </div>
        </div>
      </div>
    </div>
  )
}
