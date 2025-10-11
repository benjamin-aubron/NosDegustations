"use client"

import { Trash2 } from "lucide-react"
import deleteWine from "@/app/(modif)/prochaines-degustations/deleteWine"
import { useRouter } from "next/navigation"

export default function DeleteButton({ vin }: { vin: string }) {

  const router = useRouter()

  return (
    <div onClick={async () => { await deleteWine(vin); router.push("/"); }} className="flex-col cursor-pointer justify-center group items-end text-sm bg-neutral-200 hover:bg-red-200 p-3 rounded-lg text-neutral-700 hover:text-red-900">
      <Trash2 className="w-6 h-6" />
    </div>)
}
