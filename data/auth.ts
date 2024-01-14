'use server'
import { createDataSupabase } from '../supabase';
import { unstable_noStore as noStore } from 'next/cache';

export async function getUser() {
    noStore()
    const supabase = createDataSupabase()
    const { data: { user } } = await supabase.auth.getUser()
    if (user) {
        return user
    } else {
        return null
    }
}