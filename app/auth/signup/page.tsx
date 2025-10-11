import { SignUpForm } from "@/components/auth/SignUpForm"

export default function SignUpPage() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold">Créer un compte</h1>
          <p className="text-gray-600 mt-2">
            Rejoignez-nous pour gérer vos dégustations de vin
          </p>
        </div>
        <SignUpForm />
      </div>
    </div>
  )
}
