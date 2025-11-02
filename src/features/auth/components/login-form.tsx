'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { SigninFormValues, signinSchema } from './validation'
import { FormInput, FormInputPassword } from '@/components/form/form-input'

export const SigninForm = () => {
  const form = useForm<SigninFormValues>({
    resolver: zodResolver(signinSchema),
    defaultValues: { email: '', password: '' }
  })

  async function onSubmit(data: SigninFormValues) {
    console.log(data)
  }

  return (
    <Card className="w-full max-w-3xl rounded-2xl">
      <CardHeader>
        <CardTitle className="text-2xl">Welcome Back.</CardTitle>
        <CardDescription>Sign in to your account to continue</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-4">
          <FormInput
            control={form.control}
            name="email"
            label="Email"
            type="email"
          />

          <FormInputPassword
            control={form.control}
            name="password"
            label="Password"
          />

          <Button type="submit" size={'lg'}>
            Sign in
          </Button>
        </form>
      </CardContent>
      <CardFooter className="justify-center">
        <p className="text-center text-sm">
          Do not have an account?{' '}
          <Link
            href="/signup"
            className="decoration-primary hover:text-primary underline underline-offset-4 transition-colors"
          >
            Click here
          </Link>
        </p>
      </CardFooter>
    </Card>
  )
}
