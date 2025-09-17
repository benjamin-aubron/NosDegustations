import {
  Card,
  CardAction,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Data } from "@/utils/types";
import Link from "next/link";

type TestedCardProps = Pick<Data, "id" | "appelation" | "alcool" | "region" | "annee" | "domaine">

export default function TestedCard({id, appelation, alcool, region, annee, domaine }: TestedCardProps) {
  return (
    <Link href={`/${id}`}>
      <Card className="my-2">
        <CardHeader>
          <CardTitle>{appelation}</CardTitle>
          <CardDescription>{region} - {domaine}</CardDescription>
          <CardAction className="flex flex-col items-end text-sm text-neutral-600 space-y-1">
            <p>{annee}</p>
            <p>{alcool}°</p>
          </CardAction>
        </CardHeader>
      </Card>
    </Link>
  )
}
