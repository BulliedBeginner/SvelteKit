import { createClient } from '@supabase/supabase-js'

const URL = import.meta.env.SUPABASE_URL
const KEY = import.meta.env.SUPABASE_KEY

// Create a single supabase client for interacting with your database
export const supabase = createClient("https://xbkilioehognmnouewpo.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inhia2lsaW9laG9nbm1ub3Vld3BvIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzEzNjA2NTksImV4cCI6MTk4NjkzNjY1OX0.c921pbi5W9Hj9fCwERzMPrViOYkFn1daoJN4VJfYLfo")
console.log(supabase)