import { SignInForm } from "@/components/auth/SignInForm"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function SignInPage() {
  return (
    <div className="flex relative items-center justify-center p-4 py-40">
      <Link href={`/`} className="flex absolute items-center gap-1 text-lg hover:bg-neutral-200 rounded-xl w-fit pl-2 pr-3 py-2 top-2 left-2"><ArrowLeft className="w-5 h-5" /> Retour</Link>
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold">Connexion</h1>
          <p className="text-gray-600 mt-2">
            Connectez-vous pour modifier les dégustations
          </p>
        </div>
        <SignInForm />
      </div>
    </div>
  )
}
