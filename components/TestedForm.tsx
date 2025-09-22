"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { useRouter } from "next/navigation"
import createTested from "@/app/ajouter-degustations/createTested"

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

const formSchema = z.object({
  appelation: z.string().min(2, {
    message: "L'appelation doit contenir au moins 2 caractères",
  }),
  region: z.string().min(2, {
    message: "La région doit contenir au moins 2 caractères",
  }),
  domain: z.string().min(2, "Min 2 caractères").or(z.literal("")).optional(),
  year: z.string().min(4, "Min 4 caractères").or(z.literal("")).optional(),
  alcohol: z.string().min(2, "Min 2 caractères").or(z.literal("")).optional(),
  cepage: z.string().min(2, "Min 2 caractères").or(z.literal("")).optional(),
  noteClem: z.string().max(2, "Min 2 caractères").or(z.literal("")).optional(),
  commentClem: z.string().min(2, "Min 2 caractères").or(z.literal("")).optional(),
  noteBenji: z.string().max(2, "Min 2 caractères").or(z.literal("")).optional(),
  commentBenji: z.string().min(2, "Min 2 caractères").or(z.literal("")).optional()
})

export default function TestedForm(defaultValues?: FormValues) {
  const router = useRouter()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      appelation: "",
      region: "",
      domain: "",
      year: "",
      alcohol: "",
      cepage: "",
      noteClem: "",
      noteBenji: "",
      commentClem: "",
      commentBenji: "",
    },
  })

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
                <Input className="bg-white" placeholder="Degré d’alcool (ex : 13.5)" type="number" step={0.5} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="cepage"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Cépage</FormLabel>
              <FormControl>
                <Input className="bg-white" placeholder="Entrer les différents cépages" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="noteClem"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Note de Clémence</FormLabel>
              <FormControl>
                <Input className="bg-white" placeholder="Entrer la note de Clémence (0-10)" type="number" step={0.1} {...field} />
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
                <Input className="bg-white" placeholder="Entrer la note de Benji (0-10)" type="number" step={0.1} {...field} />
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
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}
