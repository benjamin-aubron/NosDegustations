"use client"

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import Combobox from "./Combobox"
import { UseFormReturn } from "react-hook-form"
import { z } from "zod"
import { formSchema } from "@/components/TestedForm"
import { useState } from "react"
import { Button } from "@/components/ui/button"



export default function CepageForm({ form, cepageLength }: { form: UseFormReturn<z.infer<typeof formSchema>>, cepageLength: number }) {
  const [cepageNumber, setCepageNumber] = useState(cepageLength)

  return (
    <div className="bg-primary/10 p-4 rounded-lg space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <FormField
          control={form.control}
          name="cepage1"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Cépage</FormLabel>
              <FormControl>
                <Combobox value={field.value} onValueChange={field.onChange} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="pourcentage1"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Pourcentage (%)</FormLabel>
              <FormControl>
                <Input className="bg-white" placeholder="%" type="number" step={1} min={0} max={100} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
      <div className={`${Math.max(cepageNumber, cepageLength) >= 2 ? "grid grid-cols-2 gap-4" : "hidden"}`}>
        <FormField
          control={form.control}
          name="cepage2"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Cépage</FormLabel>
              <FormControl>
                <Combobox value={field.value} onValueChange={field.onChange} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="pourcentage2"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Pourcentage (%)</FormLabel>
              <FormControl>
                <Input className="bg-white" placeholder="%" type="number" step={1} min={0} max={100} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
      <div className={`${Math.max(cepageNumber, cepageLength) >= 3 ? "grid grid-cols-2 gap-4" : "hidden"}`}>
        <FormField
          control={form.control}
          name="cepage3"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Cépage</FormLabel>
              <FormControl>
                <Combobox value={field.value} onValueChange={field.onChange} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="pourcentage3"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Pourcentage (%)</FormLabel>
              <FormControl>
                <Input className="bg-white" placeholder="%" type="number" step={1} min={0} max={100} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
      <div className={`${Math.max(cepageNumber, cepageLength) >= 4 ? "grid grid-cols-2 gap-4" : "hidden"}`}>
        <FormField
          control={form.control}
          name="cepage4"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Cépage</FormLabel>
              <FormControl>
                <Combobox value={field.value} onValueChange={field.onChange} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="pourcentage4"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Pourcentage (%)</FormLabel>
              <FormControl>
                <Input className="bg-white" placeholder="%" type="number" step={1} min={0} max={100} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
      <Button type="button" variant={"outline"} onClick={() => setCepageNumber(cepageNumber + 1)} className="mt-2 cursor-pointer" disabled={cepageNumber >= 4}>Ajouter un cépage</Button>
    </div>
  )
}
