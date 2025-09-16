"use client"

import { Pie, PieChart } from "recharts"
import { Cepage } from "@/utils/types"

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

const chartConfig = {
  Jacquère: {
    label: "Jacquère",
    color: "var(--chart-1)", // ← Même couleur
  },
  Jacquère2: {
    label: "Jacquère2", 
    color: "#124536", // ← Couleur différente
  },
} satisfies ChartConfig

export default function ChartPieDonut({ chartData }: { chartData: Cepage[] }) {
  return (
    <ChartContainer
      config={chartConfig}
      className="mx-auto aspect-square max-h-[250px]"
    >
      <PieChart>
        <ChartTooltip
          cursor={false}
          content={<ChartTooltipContent hideLabel />}
        />
        <Pie
          data={chartData}
          dataKey="pourcentage"
          nameKey="cepage"
          innerRadius={60}
          isAnimationActive={false}
          
        />
      </PieChart>
    </ChartContainer>
  )
}
