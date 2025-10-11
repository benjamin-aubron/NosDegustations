"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { authClient } from "@/lib/auth-client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function SignInForm() {
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setIsLoading(true)

    const { data, error } = await authClient.signIn.email(
      {
        email,
        password,
        callbackURL: "/"
      },
      {
        onRequest: () => {
          setIsLoading(true)
        },
        onSuccess: () => {
          router.push("/")
        },
        onError: (ctx) => {
          setError(ctx.error.message)
          setIsLoading(false)
        }
      }
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 w-full max-w-md">
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          placeholder="votre@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="password">Mot de passe</Label>
        <Input
          id="password"
          type="password"
          placeholder="Votre mot de passe"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>

      {error && (
        <div className="p-3 text-sm text-red-500 bg-red-50 rounded-md">
          {error}
        </div>
      )}

      <Button type="submit" className="w-full" disabled={isLoading}>
        {isLoading ? "Connexion..." : "Se connecter"}
      </Button>

      <p className="text-sm text-center text-gray-600">
        Pas encore de compte ?{" "}
        <a href="/auth/signup" className="text-blue-600 hover:underline">
          S'inscrire
        </a>
      </p>
    </form>
  )
}
