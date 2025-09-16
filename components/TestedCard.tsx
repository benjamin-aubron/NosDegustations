import {
  Card,
  CardAction,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Data } from "@/utils/types";
import Link from "next/link";

type TestedCardProps = Pick<Data, "appelation" | "terroir" | "alcool" | "region" | "annee" | "domaine">

export default function TestedCard({ appelation, terroir, alcool, region, annee, domaine }: TestedCardProps) {
  return (
    <Link href={`/${appelation}`}>
      <Card className="my-2">
        <CardHeader>
          <CardTitle>{appelation}</CardTitle>
          <CardDescription>{region}{terroir === "" ? " - " : ` - ${terroir} - `}{domaine}</CardDescription>
          <CardAction className="flex flex-col items-end text-sm text-neutral-600 space-y-1">
            <p>{annee}</p>
            <p>{alcool}°</p>
          </CardAction>
        </CardHeader>
      </Card>
    </Link>
  )
}
