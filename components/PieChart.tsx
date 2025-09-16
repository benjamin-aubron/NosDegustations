"use client"

import { Pie, PieChart } from "recharts"
import { Cepage } from "@/utils/types"
import { WHITE_COLORS, RED_COLORS } from "@/utils/constant"

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"


export default function ChartPieDonut({ chartData, type }: { chartData: Cepage[], type: string }) {

  const dataWithColors = type === "vin rouge" ? chartData.map((item, index) => ({
    ...item,
    fill: RED_COLORS[index],
  })) : chartData.map((item, index) => ({
    ...item,
    fill: WHITE_COLORS[index],
  }));

  const chartConfig = {
    cepage: {
      label: "cepage",
    },
  } satisfies ChartConfig

  return (
    <ChartContainer
      config={chartConfig}
      className="mx-auto aspect-square max-h-[150px]"
    >
      <PieChart className="border">
        <ChartTooltip
          cursor={false}
          content={<ChartTooltipContent hideLabel />}
        />
        <Pie
          data={dataWithColors}
          dataKey="pourcentage"
          nameKey="cepage"
          innerRadius={35}
          isAnimationActive={false}
        />
      </PieChart>
    </ChartContainer>
  )
}
