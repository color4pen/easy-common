import { createServerActionClient, createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'

export const createActionSupabase = () => createServerActionClient({ cookies })

export const createDataSupabase = () => {
    const cookieStore = cookies()
    return createServerComponentClient({ cookies: () => cookieStore })
}