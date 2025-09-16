import { Star } from "lucide-react"


export default function Score({note}: {note: number}) {


  return (
    <div className="flex items-center">
      <Star className="text-yellow-500" size={20} fill={note >= 1 ? "currentColor" : "none"} />
      <Star className="text-yellow-500" size={20} fill={note >= 2 ? "currentColor" : "none"} />
      <Star className="text-yellow-500" size={20} fill={note >= 3 ? "currentColor" : "none"} />
      <Star className="text-yellow-500" size={20} fill={note >= 4 ? "currentColor" : "none"} />
      <Star className="text-yellow-500" size={20} fill={note >= 5 ? "currentColor" : "none"} />
    </div>)
}
