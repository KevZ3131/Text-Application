"use server "
import { Database } from '@/types_db'
import { createServerClient } from '@supabase/ssr'
import { cookies } from 'next/headers'

export function createClient() {
  const cookieStore = cookies()

  return createServerClient<Database>(
    "https://bopnexzclosmascivdrh.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJvcG5leHpjbG9zbWFzY2l2ZHJoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjE1NzU0NTEsImV4cCI6MjAzNzE1MTQ1MX0.V0nxy1dfPvPTznvE2UHmfEknJhEh_jqrNSYukZrd4ts",
    {
      cookies: {
        getAll() {
          return cookieStore.getAll()
        },
        setAll(cookiesToSet) {
          try {
            cookiesToSet.forEach(({ name, value, options }) =>
              cookieStore.set(name, value, options)
            )
          } catch {
            // The `setAll` method was called from a Server Component.
            // This can be ignored if you have middleware refreshing
            // user sessions.
          }
        },
      },
    }
  )
}