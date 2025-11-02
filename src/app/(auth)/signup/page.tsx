import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import { SignupForm } from '@/features/auth/components/signup-form'
import Link from 'next/link'

export default function SignupPage() {
  return (
    <div className="flex w-full items-center justify-center px-6">
      <Card className="w-full max-w-3xl rounded-2xl">
        <CardHeader>
          <CardTitle className="text-2xl">Get Started.</CardTitle>
          <CardDescription>
            Create your first account to continue
          </CardDescription>
        </CardHeader>
        <CardContent>
          <SignupForm />
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
    </div>
  )
}
