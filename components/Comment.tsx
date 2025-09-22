import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Score from "@/components/Score"


export default function Comment({name, content, note}: {name: string, content: string, note: number | undefined}) {
  return (
    <div className="bg-neutral-200 rounded-2xl p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <h2 className="text-xl">{name === "clem" ? "Clemence" : "Benji"}</h2>
        </div>
        <Score note={note} />
      </div>
      <p className="pt-4">{content}</p>

    </div>
  )
}
