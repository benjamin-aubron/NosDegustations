import { data } from "@/db/data"

export default async function Page({ params }: { params: Promise<{ vin: string }> }) {
  const { vin } = await params

  const selectedWine = data.find((d) => d.appelation === vin)
  return (
    <div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <h1>{selectedWine?.appelation}</h1>
          <p>{selectedWine?.region}</p>
          <p>{selectedWine?.terroir}</p>
          <p>{selectedWine?.domaine}</p>
        </div>
        <div className="w-full h-full bg-neutral-500 rounded-3xl">
          Image
        </div>
      </div>
    </div>
  )
}
