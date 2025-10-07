"use client"
import NextTastingCard from "@/components/NextTastingCard"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Card } from "@/components/ui/card"
import fetchTasting from "./fetchTasting"
import { useState, useEffect } from "react"
import { Data } from "@/utils/types"
import createTasting from "./createTasting"

type Tasting = Pick<Data, "id" | "appelation" | "region">

export default function NextTastingPage() {
  const [data, setData] = useState<Tasting[]>([])
  const [formData, setFormData] = useState<Tasting>({
    appelation: "",
    region: "",
    id: "",
  })

  useEffect(() => {
    async function fetchData() {
      const data = await fetchTasting()
      setData(data)
    }
    fetchData()
  }, [])

  async function refreshData(){
    const data = await fetchTasting()
    setData(data)
  }

  async function handleSubmit(formData: FormData) {
    await createTasting(formData)
    setFormData({
      appelation: "",
      region: "",
      id: "",
    })
    refreshData()
  }

  return (
    <div>
      <Link href={`/`} className="flex items-center gap-1 text-lg hover:bg-primary/20 rounded-lg w-fit pl-2 pr-3 py-2 mb-4"> <ArrowLeft className="w-5 h-5" /> Retour</Link>
      <h1 className="text-2xl md:text-4xl font-bold text-primary mb-4 mt-4">Prochaines dégustations</h1>
      <h2 className="my-2 font-medium text-lg">Ajouter ou modifier un vin</h2>
      <Card className="px-4 rounded-lg">
        <form action={handleSubmit}>
          <div className="flex flex-col md:flex-row gap-4 w-full">
            <input
              type="text"
              name="appelation"
              placeholder="Appelation"
              value={formData.appelation}
              onChange={(e) => setFormData({ ...formData, appelation: e.target.value })}
              className="w-full px-2 py-1 ring-1 focus:ring-2 ring-primary rounded-md outline-none"
            />
            <input
              type="text"
              name="region"
              placeholder="Région"
              value={formData.region}
              onChange={(e) => setFormData({ ...formData, region: e.target.value })}
              className="w-full px-2 py-1 ring-1 focus:ring-2 ring-primary rounded-md outline-none"
            />
          </div>
          <div className="flex w-full mt-4">
            <button type="submit" className="bg-primary/20 hover:bg-primary rounded-md px-2 py-1 cursor-pointer hover:text-white">Ajouter ou modifier</button>
          </div>
        </form>
      </Card>
      <div className="mt-4">
        <h2 className="my-2 font-medium text-lg">Liste des dégustations</h2>
        {data.map((d) => (
          <NextTastingCard 
            key={d.id} 
            id={d.id} 
            appelation={d.appelation} 
            region={d.region} 
            onClick={() => setFormData({ ...d })}
            onDelete={async () => refreshData()}
          />
        ))}
      </div>
    </div>
  )
}