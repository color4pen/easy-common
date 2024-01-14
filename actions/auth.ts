'use server'
import { redirect } from "next/navigation"
import { createActionSupabase } from "../supabase"

export async function signIn(formData: FormData) {
  const supabase = createActionSupabase()
  const email = formData.get('email')
  const password = formData.get('password')
  if (email && password) {
    if (typeof email === "string" && typeof password === "string") {
      const { data, error } = await supabase.auth.signInWithPassword({
        email, password
      })
      redirect("/admin")
    }
  }
}

export async function signout(formData: FormData) {
  const supabase = createActionSupabase()
  await supabase.auth.signOut()
  redirect("/login")
}