import TestedForm from "@/components/TestedForm"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function AddTestedPage() {
  return (
    <div>
      <Link href={`/`} className="flex items-center gap-1 text-lg hover:bg-neutral-200 rounded-lg w-fit pl-2 pr-3 py-2 mb-4"> <ArrowLeft className="w-5 h-5" /> Retour</Link>
      <h1 className="text-4xl font-medium my-8">Ajouter une boisson</h1>
      <TestedForm />
    </div>
  )
}
