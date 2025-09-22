import {
  Card,
  CardAction,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Data } from "@/utils/types";
import Link from "next/link";

type TestedCardProps = Pick<Data, "id" | "appelation" | "alcohol" | "region" | "year" >

export default function TestedCard({id, appelation, alcohol, region, year }: TestedCardProps) {
  return (
    <Link href={`/${id}`}>
      <Card className="my-2 p-4">
        <CardHeader className="p-0">
          <CardTitle>{appelation}</CardTitle>
          <CardDescription>{region}</CardDescription>
          <CardAction className="flex flex-col items-end text-sm text-neutral-600 space-y-1">
            <p>{year}</p>
            <p>{alcohol}°</p>
          </CardAction>
        </CardHeader>
      </Card>
    </Link>
  )
}
