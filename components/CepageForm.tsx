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



export default function CepageForm({form} : {form : UseFormReturn<z.infer<typeof formSchema>>}) {


  return (
    <>
    <div className="grid grid-cols-2 gap-4">
      <FormField
        control={form.control}
        name="cepage1"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Cépage 1</FormLabel>
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
            <FormLabel>Pourcentage 1 (%)</FormLabel>
            <FormControl>
              <Input className="bg-white" placeholder="%" type="number" step={1} min={0} max={100} {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
    <div className="grid grid-cols-2 gap-4">
      <FormField
        control={form.control}
        name="cepage2"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Cépage 2</FormLabel>
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
            <FormLabel>Pourcentage 2 (%)</FormLabel>
            <FormControl>
              <Input className="bg-white" placeholder="%" type="number" step={1} min={0} max={100} {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
    
    </>
  )
}
