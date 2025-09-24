import TestedForm from "@/components/TestedForm"
import fetchSelected from "@/app/ajouter-degustations/fetchSelected"
import NotFound from "@/app/not-found"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import DeleteButton from "@/components/DeleteButton"
import { Cepage } from "@/utils/types"

type StringifiedData = {
  appelation: string;
  region: string;
  domain?: string;
  tastingDate?: string;
  year?: string;
  alcohol?: string;
  cepage1?: string;
  pourcentage1?: string;
  cepage2?: string;
  pourcentage2?: string;
  noteClem?: string;
  commentClem?: string;
  noteBenji?: string;
  commentBenji?: string;
};

export default async function Page({ params }: { params: Promise<{ vin: string }> }) {
  const { vin } = await params

  const selectedWine = await fetchSelected(vin)
  if (!selectedWine) return <NotFound />

  console.log(selectedWine)

  const formattedSelectedWine: StringifiedData = {
    appelation: selectedWine.appelation,
    region: selectedWine.region,
    domain: selectedWine.domain as string,
    tastingDate: selectedWine.tastingDate ? selectedWine.tastingDate.toISOString().split('T')[0] : "",
    year: String(selectedWine.year),
    alcohol: String(selectedWine.alcohol),
    cepage1: (selectedWine.cepage as Cepage[])?.[0]?.cepage || "",
    pourcentage1: (selectedWine.cepage as Cepage[])?.[0]?.pourcentage ? String((selectedWine.cepage as Cepage[])?.[0]?.pourcentage) : "",
    cepage2: (selectedWine.cepage as Cepage[])?.[1]?.cepage || "",
    pourcentage2: (selectedWine.cepage as Cepage[])?.[1]?.pourcentage ? String((selectedWine.cepage as Cepage[])?.[1]?.pourcentage) : "",
    noteClem: selectedWine.noteClem ? String(selectedWine.noteClem) : "",
    commentClem: selectedWine.commentClem as string,
    noteBenji: selectedWine.noteBenji ? String(selectedWine.noteBenji) : "",
    commentBenji: selectedWine.commentBenji as string,
  }


  return (
    <div>
      <div className="flex justify-between">
        <Link href={`/`} className="flex items-center gap-1 text-lg hover:bg-neutral-200 rounded-lg pl-2 pr-3 py-2"> <ArrowLeft className="w-5 h-5" /> Retour</Link>
        <DeleteButton vin={selectedWine.id} />
      </div>
      <h1 className="text-4xl font-medium my-8">Modifier {selectedWine?.appelation}</h1>
      <TestedForm DefaultValues={formattedSelectedWine} />
    </div>
  )
}
