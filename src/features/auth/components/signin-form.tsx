'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from '@/components/ui/button'
import { SigninFormValues, signinSchema } from './validation'
import { FormInput, FormInputPassword } from '@/components/form/form-input'
import { FormCheckbox } from '@/components/form/form-checkbox'
import Link from 'next/link'
import { authClient } from '@/lib/auth-client'
import { toast } from 'sonner'
import { useRouter } from 'next/navigation'

export const SigninForm = () => {
  const router = useRouter()
  const form = useForm<SigninFormValues>({
    resolver: zodResolver(signinSchema),
    defaultValues: { email: '', password: '', remember: true }
  })

  async function onSubmit(data: SigninFormValues) {
    try {
      await authClient.signIn.email({
        ...data,
        rememberMe: data.remember,
        fetchOptions: {
          onError(context) {
            toast.error(context.error.message ?? context.error.statusText)
          },
          onSuccess() {
            router.push('/dashboard')
          }
        }
      })
    } catch {
      toast.error('Something went wrong')
    }
  }

  return (
    <form
      onSubmit={form.handleSubmit(onSubmit)}
      className="flex flex-col items-end gap-4"
    >
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

      <div className="flex w-full flex-1 items-center justify-between">
        <FormCheckbox
          control={form.control}
          name="remember"
          label="Remember me"
        />

        <Link
          href={'/forgot-password'}
          className="block shrink-0 text-sm hover:underline hover:underline-offset-4"
        >
          Forgot Password?
        </Link>
      </div>

      <Button
        type="submit"
        size={'lg'}
        className="mt-4 max-md:w-full"
        disabled={form.formState.isSubmitting}
      >
        Sign in
      </Button>
    </form>
  )
}
