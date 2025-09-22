import TestedForm from "@/components/TestedForm"
import fetchSelected from "@/app/ajouter-degustations/fetchSelected"
import NotFound from "@/app/not-found"

export default async function Page({ params }: { params: Promise<{ vin: string }> }) {
  const { vin } = await params

  const selectedWine = await fetchSelected(vin)
  if (!selectedWine) return <NotFound />

  return (
    <div>
      <h1 className="text-4xl font-medium my-8">Modifier {selectedWine?.appelation}</h1>
      <TestedForm />
    </div>
  )
}
