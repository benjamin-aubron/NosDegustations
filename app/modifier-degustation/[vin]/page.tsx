import TestedForm from "@/components/TestedForm"
import fetchSelected from "@/app/ajouter-degustations/fetchSelected"
import NotFound from "@/app/not-found"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Trash2 } from "lucide-react"

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
    noteClem: selectedWine.noteClem ? String(selectedWine.noteClem) : "",
    commentClem: selectedWine.commentClem as string,
    noteBenji: selectedWine.noteBenji ? String(selectedWine.noteBenji) : "",
    commentBenji: selectedWine.commentBenji as string,
  }


  return (
    <div>
      <div className="flex justify-between">
        <Link href={`/`} className="flex items-center gap-1 text-lg hover:bg-neutral-200 rounded-lg pl-2 pr-3 py-2"> <ArrowLeft className="w-5 h-5" /> Retour</Link>
        <div className="flex-col cursor-pointer justify-center group items-end text-sm bg-neutral-200 hover:bg-red-200 p-3 rounded-lg text-neutral-700 hover:text-red-900">
          <Trash2 className="w-6 h-6" />
        </div>
      </div>
      <h1 className="text-4xl font-medium my-8">Modifier {selectedWine?.appelation}</h1>
      <TestedForm DefaultValues={formattedSelectedWine} />
    </div>
  )
}
