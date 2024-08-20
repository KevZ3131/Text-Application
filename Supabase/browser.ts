'use client'

import { Database } from '@/types_db';
import { createBrowserClient } from '@supabase/ssr'

export const supabaseBrowser = () => createBrowserClient<Database>(
    "https://bopnexzclosmascivdrh.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJvcG5leHpjbG9zbWFzY2l2ZHJoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjE1NzU0NTEsImV4cCI6MjAzNzE1MTQ1MX0.V0nxy1dfPvPTznvE2UHmfEknJhEh_jqrNSYukZrd4ts"

);

