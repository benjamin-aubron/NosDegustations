"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import Combobox from "./Combobox"



export default function CepageForm({form} : {form : any}) {


  return (
    <div className="grid grid-cols-2 gap-4">
      <FormField
        control={form.control}
        name="appelation"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Cépage</FormLabel>
            <FormControl>
              <Combobox />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="appelation"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Pourcentage (%)</FormLabel>
            <FormControl>
              <Input className="bg-white" placeholder="Degré d’alcool (ex : 13.5)" type="number" step={0.5} min={0} max={100} {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  )
}
