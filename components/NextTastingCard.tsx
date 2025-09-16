import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Data } from "@/utils/types";

type NextTastingCardProps = Pick<Data, "appelation" | "region">

export default function NextTastingCard({ appelation, region}: NextTastingCardProps) {
  return (
    <Card className="my-2">
      <CardHeader>
        <CardTitle>{appelation}</CardTitle>
        <CardDescription>{region}</CardDescription>
      </CardHeader>
    </Card>
  )
}
