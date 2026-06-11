import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL?.trim()
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY?.trim()

console.log('SUPABASE URL:', supabaseUrl)

if (!supabaseUrl || !supabaseAnonKey) {
  alert('Erro: variáveis do Supabase não carregaram.')
  throw new Error('Variáveis do Supabase não configuradas.')
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
