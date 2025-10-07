"use client"
import {
  Card,
} from "@/components/ui/card"
import { Data } from "@/utils/types";
import { Trash2 } from "lucide-react";
import { usePathname } from "next/navigation";
import deleteNextTasting from "@/app/prochaines-degustations/deleteWine";

type NextTastingCardProps = Pick<Data, "id" | "appelation" | "region">

export default function NextTastingCard({ id, appelation, region, onClick, onDelete }: NextTastingCardProps & { onClick?: () => void, onDelete?: () => void }) {

  const pathname = usePathname()

  return (
    <div className="relative"> 
      <Card className={`${pathname !== "/" && "cursor-pointer"} not-last:my-2 p-2 pl-3 rounded-md md:rounded-lg`} onClick={onClick}>
        <div className="flex justify-between items-center">
          <div className="">
            <div className="text-base font-semibold">{appelation}</div>
            <div className="text-sm text-neutral-600">{region}</div>
          </div>
        </div>
      </Card>
      <div onClick={async () => { await deleteNextTasting(id); onDelete?.(); }} className={`${pathname === "/" ? "hidden" : "flex"} flex-col cursor-pointer justify-center items-end text-sm text-neutral-600 bg-red-50 hover:bg-red-200 p-2 rounded-sm group absolute top-1/2 -translate-y-1/2 right-4`}>
        <Trash2 className="w-6 h-6 text-neutral-500 group-hover:text-red-900" />
      </div>
    </div>
  )
}
