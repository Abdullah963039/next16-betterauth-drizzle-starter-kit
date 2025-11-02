'use server'

import { auth } from '@/lib/auth'
import { headers } from 'next/headers'
import { redirect } from 'next/navigation'

export async function requireAuth(redirectHref: string = '/signup') {
  const session = await auth.api.getSession({
    headers: await headers()
  })

  if (session == null) return redirect(redirectHref)

  return session
}
