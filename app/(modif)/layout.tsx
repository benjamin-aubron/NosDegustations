import { getSession } from "@/lib/get-session"
import { redirect } from "next/navigation"

export default async function Layout({ children } : { children: React.ReactNode }) {
  const session = await getSession()
  if (!session) redirect("/auth/signin")
  return children
}