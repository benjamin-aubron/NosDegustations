import TestedForm from "@/components/TestedForm"
import fetchSelected from "@/app/ajouter-degustations/fetchSelected"
import NotFound from "@/app/not-found"

type StringifiedData = {
  appelation: string;
  region: string;
  domain?: string;
  year?: string;
  alcohol?: string;
  cepage?: string
  noteClem?: string;
  commentClem?: string;
  noteBenji?: string;
  commentBenji?: string;
};

export default async function Page({ params }: { params: Promise<{ vin: string }> }) {
  const { vin } = await params

  const selectedWine = await fetchSelected(vin)
  if (!selectedWine) return <NotFound />

  const formattedSelectedWine: StringifiedData = {
    appelation: selectedWine.appelation,
    region: selectedWine.region,
    domain: selectedWine.domain as string,
    year: String(selectedWine.year),
    alcohol: String(selectedWine.alcohol),
    cepage: selectedWine.cepage as string,
    noteClem: String(selectedWine.noteClem),
    commentClem: selectedWine.commentClem as string,
    noteBenji: String(selectedWine.noteBenji),
    commentBenji: selectedWine.commentBenji as string,
  }


  return (
    <div>
      <h1 className="text-4xl font-medium my-8">Modifier {selectedWine?.appelation}</h1>
      <TestedForm DefaultValues={formattedSelectedWine} />
    </div>
  )
}
