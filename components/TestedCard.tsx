import {
  Card
} from "@/components/ui/card"
import { Data } from "@/utils/types";
import Link from "next/link";

type TestedCardProps = Pick<Data, "id" | "appelation" | "alcohol" | "region" | "year">

export default function TestedCard({ id, appelation, alcohol, region, year }: TestedCardProps) {
  return (
    <Link href={`/${id}`}>
      <Card className="flex flex-row justify-between items-center my-2 p-2 px-3 rounded-md md:rounded-lg">
        <div className="flex justify-between items-center">
          <div className="">
            <div className="text-base font-semibold">{appelation}</div>
            <div className="text-sm text-neutral-600">{region}</div>
          </div>
        </div>
        <div className="flex flex-col items-end text-sm text-neutral-600 space-y-1">
          <p>{year ? year : ""}</p>
          <p>{alcohol ? `${alcohol}°` : ""}</p>
        </div>
      </Card>
    </Link>
  )
}
