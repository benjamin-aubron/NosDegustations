import ToBeTestedCard from "./NextTastingCard"
import { data } from "@/db/data"

export default function NextTasting() {
  return (
    <div>
      <h2 className="text-2xl mt-6 mb-4 pl-2">Prochaines dégustations</h2>
      {data.filter((d) => !d.bu).map((d) => (
        <ToBeTestedCard key={d.id} appelation={d.appelation} region={d.region}/>
      ))}
    </div>
  )
}
