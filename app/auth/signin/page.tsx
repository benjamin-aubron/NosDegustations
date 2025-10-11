import { SignInForm } from "@/components/auth/SignInForm"

export default function SignInPage() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold">Connexion</h1>
          <p className="text-gray-600 mt-2">
            Connectez-vous pour accéder à vos dégustations
          </p>
        </div>
        <SignInForm />
      </div>
    </div>
  )
}
