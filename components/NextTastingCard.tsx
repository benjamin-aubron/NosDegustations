"use client"
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
  CardAction
} from "@/components/ui/card"
import { Data } from "@/utils/types";
import { Trash2 } from "lucide-react";
import { usePathname } from "next/navigation";

type NextTastingCardProps = Pick<Data, "appelation" | "region">

export default function NextTastingCard({ appelation, region }: NextTastingCardProps) {

  const pathname = usePathname()

  return (
    <Card className="my-2 p-4 rounded-lg">
      <div className="flex justify-between items-center">
        <div className="">
          <div className="text-base font-semibold">{appelation}</div>
          <div className="text-sm text-neutral-600">{region}</div>
        </div>
        <div className={`${pathname === "/" ? "hidden" : "flex"} flex-col justify-center items-end text-sm text-neutral-600 hover:bg-red-100 p-2 cursor-pointer rounded-sm group`}>
          <Trash2 className="w-6 h-6 text-neutral-500 group-hover:text-red-700" />
        </div>
      </div>

    </Card>
  )
}
