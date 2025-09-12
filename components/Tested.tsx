import { data } from "@/db/data"
import TestedCard from "@/components/TestedCard"

export default function Tested() {
  return (
    <div>
      <h1>Nos dégustations</h1>
      {data.map((d) => (
        <TestedCard key={d.id} appelation={d.appelation} terroir={d.terroir} alcool={d.alcool} region={d.region} annee={d.annee} domaine={d.domaine}/>
      ))}
    </div>
  )
}
