"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { useRouter } from "next/navigation"

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
import { redirect } from "next/dist/server/api-utils"

const formSchema = z.object({
  appelation: z.string().min(2, {
    message: "L'appelation doit contenir au moins 2 caractères",
  }),
  region: z.string().min(2, {
    message: "La région doit contenir au moins 2 caractères",
  }),
  domain: z.string().min(2,{
    message: "Le domaine doit contenir au moins 2 caractères",
  }),
  year:  z.number().min(1900).max(2050, {
  message: "L'année doit être un nombre à 4 chiffres, entre 1900 et 2050",
  }),
  alcohol: z.number().min(0).max(100, {
  message: "Le degré d'alcool doit être compris entre 0 et 100",
  }),
  cepage: z.string().min(2, {
    message: "L'appelation doit contenir au moins 2 caractères",
  }),
  noteClem: z.number().min(0).max(10, {
  message: "La note doit être comprise entre 0 et 10",
  }),
  commentClem: z.string().min(4, {
    message: "L'appelation doit contenir au moins 2 caractères",
  }),
  noteBenji: z.number().min(0).max(10, {
  message: "La note doit être comprise entre 0 et 10",
  }),
  commentBenji: z.string().min(4, {
    message: "L'appelation doit contenir au moins 2 caractères",
  }),
})

export default function TestedForm() { 

  const router = useRouter()
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      appelation: "",
      region: "",
      domain: "",
      year: 0,
      alcohol: 0,
      cepage: "",
      noteClem: 0,
      noteBenji: 0,
      commentClem: "",
      commentBenji: "",
    },
  })


  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
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
            <FormLabel>Appelation</FormLabel>
            <FormControl>
              <Input placeholder="Entrer l'appelation" {...field} />
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
            <FormLabel>Région</FormLabel>
            <FormControl>
              <Input placeholder="Région" {...field} />
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
              <Input placeholder="Domaine" {...field} />
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
              <Input placeholder="Année" {...field} />
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
            <FormLabel>Alcool</FormLabel>
            <FormControl>
              <Input placeholder="alcohol" {...field} />
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
              <Input placeholder="Entrer les différents cépages" {...field} />
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
              <Input placeholder="Entrer la note de Clémence" {...field} />
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
              <Input placeholder="Entrer la note de Clémence" {...field} />
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
              <Input placeholder="Entrer le commentaire de Clémence" {...field} />
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
              <Input placeholder="Entrer le commentaire de Benji" {...field} />
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