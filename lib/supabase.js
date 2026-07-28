import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

console.log('Supabase config check:', { 
    hasUrl: !!supabaseUrl, 
    hasKey: !!supabaseAnonKey 
});

const hasSupabaseConfig = !!supabaseUrl && !!supabaseAnonKey;

// Ensure we don't crash if config is missing (e.g. during Vercel builds or if user forgot .env)
export const supabase = hasSupabaseConfig 
    ? createClient(supabaseUrl, supabaseAnonKey)
    : null;
