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
import { SignupFormValues, signupSchema } from './validation'
import { FormInput, FormInputPassword } from '@/components/form/form-input'
import { authClient } from '@/lib/auth-client'
import { toast } from 'sonner'

export const SignupForm = () => {
  const form = useForm<SignupFormValues>({
    resolver: zodResolver(signupSchema),
    defaultValues: { name: '', email: '', password: '', confirmPassword: '' }
  })

  async function onSubmit(data: SignupFormValues) {
    await new Promise((res) => setTimeout(res, 1000))
    const { data: response, error } = await authClient.signUp.email({
      ...data,
      fetchOptions: {
        onError(ctx) {
          console.error(ctx.error)
        },
        async onSuccess(ctx) {
          console.log(await ctx.response.json())
        }
      },
      callbackURL: '/settings'
    })
    if (error) {
      toast.error(error.message ?? error.statusText)
    }
    console.log({ response, error })
  }

  return (
    <Card className="w-full max-w-3xl rounded-2xl">
      <CardHeader>
        <CardTitle className="text-2xl">Get Started.</CardTitle>
        <CardDescription>Create your first account to continue</CardDescription>
      </CardHeader>
      <CardContent>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col items-end gap-4"
        >
          <FormInput control={form.control} name="name" label="Name" />

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

          <FormInputPassword
            control={form.control}
            name="confirmPassword"
            label="Confirm password"
          />

          <Button type="submit" size={'lg'} className="mt-4 max-md:w-full">
            Sign up
          </Button>
        </form>
      </CardContent>
      <CardFooter className="justify-center">
        <p className="text-center text-sm">
          Already have an account?{' '}
          <Link
            href="/signin"
            className="decoration-primary hover:text-primary underline underline-offset-4 transition-colors"
          >
            Click here
          </Link>
        </p>
      </CardFooter>
    </Card>
  )
}
