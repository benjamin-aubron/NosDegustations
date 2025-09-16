import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Score from "@/components/Score"


export default function Comment({name}: {name: string}) {
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
        <Score note={3.5}/>
      </div>
      <p className="pt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis vel voluptas harum alias, repellat tempore est consequatur sequi obcaecati ad, ipsam, eveniet fugiat quod! Sit, atque?</p>

    </div>
  )
}
