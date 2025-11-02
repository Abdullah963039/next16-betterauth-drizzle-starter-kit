'use server'

import { auth } from '@/lib/auth'
import { SigninFormValues, SignupFormValues } from './components/validation'
import { headers } from 'next/headers'

export async function serverSignUp({
  email,
  name,
  password
}: SignupFormValues) {
  try {
    await auth.api.signUpEmail({
      body: {
        name,
        email,
        password,
        callbackURL: '/dashboard'
      },
      headers: await headers()
    })
  } catch (error: unknown) {
    console.log(error)

    return { error: true, message: 'Internal Server Error' }
  }
}

export async function serverSignIn({
  email,
  password,
  remember
}: SigninFormValues) {
  try {
    await auth.api.signInEmail({
      body: {
        email,
        password,
        rememberMe: remember
      },
      headers: await headers()
    })
  } catch (error: unknown) {
    console.log(error)

    return { error: true, message: 'Internal Server Error' }
  }
}

export async function serverSignOut() {
  try {
    await auth.api.signOut({
      headers: await headers()
    })
  } catch (error: unknown) {
    console.log(error)

    return { error: true, message: 'Internal Server Error' }
  }
}
