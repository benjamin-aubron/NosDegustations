"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { useRouter } from "next/navigation"
import createTested from "@/app/ajouter-degustations/createTested"
import CepageForm from "./CepageForm"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

export const formSchema = z.object({
  appelation: z.string().min(2, {
    message: "L'appelation doit contenir au moins 2 caractères",
  }),
  region: z.string().min(2, {
    message: "La région doit contenir au moins 2 caractères",
  }),
  domain: z.string().min(2, "Min 2 caractères").or(z.literal("")).optional(),
  tastingDate: z.string().min(1, "Date requise").or(z.literal("")).optional(),
  year: z.string().min(4, "Min 4 caractères").or(z.literal("")).optional(),
  alcohol: z.string().min(2, "Min 2 caractères").or(z.literal("")).optional(),
  cepage1: z.string().min(1, "Cépage requis").or(z.literal("")).optional(),
  pourcentage1: z.string().min(1, "Pourcentage requis").or(z.literal("")).optional(),
  cepage2: z.string().min(1, "Cépage requis").or(z.literal("")).optional(),
  pourcentage2: z.string().min(1, "Pourcentage requis").or(z.literal("")).optional(),
  cepage3: z.string().min(1, "Cépage requis").or(z.literal("")).optional(),
  pourcentage3: z.string().min(1, "Pourcentage requis").or(z.literal("")).optional(),
  cepage4: z.string().min(1, "Cépage requis").or(z.literal("")).optional(),
  pourcentage4: z.string().min(1, "Pourcentage requis").or(z.literal("")).optional(),
  noteClem: z.string().max(2, "Max 2 caractères").or(z.literal("")).optional(),
  commentClem: z.string().min(2, "Min 2 caractères").or(z.literal("")).optional(),
  noteBenji: z.string().max(2, "Max 2 caractères").or(z.literal("")).optional(),
  commentBenji: z.string().min(2, "Min 2 caractères").or(z.literal("")).optional()
})

export default function TestedForm({ DefaultValues }: { DefaultValues?: z.infer<typeof formSchema> }) {
  const router = useRouter()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      appelation: DefaultValues?.appelation || "",
      region: DefaultValues?.region || "",
      domain: DefaultValues?.domain || "",
      tastingDate: DefaultValues?.tastingDate || "",
      year: DefaultValues?.year || "",
      alcohol: DefaultValues?.alcohol || "",
      cepage1: DefaultValues?.cepage1 || "",
      pourcentage1: DefaultValues?.pourcentage1 || "",
      cepage2: DefaultValues?.cepage2 || "",
      pourcentage2: DefaultValues?.pourcentage2 || "",
      cepage3: DefaultValues?.cepage3 || "",
      pourcentage3: DefaultValues?.pourcentage3 || "",
      cepage4: DefaultValues?.cepage4 || "",
      pourcentage4: DefaultValues?.pourcentage4 || "",
      noteClem: DefaultValues?.noteClem || "",
      noteBenji: DefaultValues?.noteBenji || "",
      commentClem: DefaultValues?.commentClem || "",
      commentBenji: DefaultValues?.commentBenji || "",
    },
  })

  function cepageLength() {
    const values = form.getValues();
    const hasCepage1 = values?.cepage1 !== "";
    const hasCepage2 = values?.cepage2 !== "";
    const hasCepage3 = values?.cepage3 !== "";
    const hasCepage4 = values?.cepage4 !== "";

    switch (true) {
      case hasCepage4:
        return 4;
      case hasCepage3:
        return 3;
      case hasCepage2:
        return 2;
      case hasCepage1:
        return 1;
      default:
        return 1;
    }
  }

  async function onSubmit(values: z.infer<typeof formSchema>) {
    await createTested(values)
    console.log("values", values)
    router.push("/")
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="appelation"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Appelation (obligatoire)</FormLabel>
              <FormControl>
                <Input className="bg-white" placeholder="Entrer l'appelation" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="region"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Région (obligatoire)</FormLabel>
              <FormControl>
                <Input className="bg-white" placeholder="Région" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="domain"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Domaine</FormLabel>
              <FormControl>
                <Input className="bg-white" placeholder="Domaine" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="domain"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Domaine</FormLabel>
              <FormControl>
                <Input className="bg-white" placeholder="Domaine" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="tastingDate"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Date de la dégustation</FormLabel>
              <FormControl>
                <Input
                  className="bg-white"
                  placeholder="Date de la dégustation (ex : 15/03/2025)"
                  type="date"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="year"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Année</FormLabel>
              <FormControl>
                <Input
                  className="bg-white"
                  placeholder="Année (ex : 2015)"
                  type="number"
                  {...field}
                  min={1900}
                  max={new Date().getFullYear()}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="alcohol"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Alcool (%)</FormLabel>
              <FormControl>
                <Input className="bg-white" placeholder="Degré d’alcool (ex : 13.5)" type="number" step={0.5} min={0} max={100} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <CepageForm form={form} cepageLength={cepageLength()} />
        <FormField
          control={form.control}
          name="noteClem"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Note de Clémence</FormLabel>
              <FormControl>
                <Input className="bg-white" placeholder="Entrer la note de Clémence (0-10)" type="number" {...field} min={0} max={10} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="commentClem"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Commentaire de Clémence</FormLabel>
              <FormControl>
                <Input className="bg-white" placeholder="Entrer le commentaire de Clémence" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="noteBenji"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Note de Benji</FormLabel>
              <FormControl>
                <Input className="bg-white" placeholder="Entrer la note de Benji (0-10)" type="number" {...field} min={0} max={10} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="commentBenji"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Commentaire de Benji</FormLabel>
              <FormControl>
                <Input className="bg-white" placeholder="Entrer le commentaire de Benji" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="cursor-pointer">Submit</Button>
      </form>
    </Form>
  )
}
