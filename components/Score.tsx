import { Star } from "lucide-react"

export default function Score({ note }: { note: number | undefined }) {
  if (note === undefined) return null

  const renderStar = (position: number) => {
    if (note/2 >= position) {
      return <Star className="text-yellow-500" size={20} fill="currentColor" />
    } else if (note/2 >= position - 0.5) {
      return (
        <div className="relative">
          <Star className="text-yellow-500" size={20} fill="none" />
          <Star
            className="text-yellow-500 absolute top-0 left-0"
            size={20}
            fill="currentColor"
            style={{ clipPath: 'polygon(0 0, 50% 0, 50% 100%, 0 100%)' }}
          />
        </div>
      )
    } else {
      return <Star className="text-yellow-500" size={20} fill="none" />
    }
  }

  return (
    <div className="flex items-center">
      {[1, 2, 3, 4, 5].map((position) => (
        <span key={position}>
          {renderStar(position)}
        </span>
      ))}
    </div>
  )
}
