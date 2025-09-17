import { data } from "@/db/data"
import TestedCard from "@/components/TestedCard"

export default function Tested() {
  return (
    <div>
      <h2 className="text-2xl mt-6 mb-4 pl-2">Nos dégustations</h2>
      {data.filter((d) => d.bu).map((d) => (
        <TestedCard key={d.id} id={d.id} appelation={d.appelation} alcool={d.alcool} region={d.region} annee={d.annee} domaine={d.domaine}/>
      ))}
    </div>
  )
}
