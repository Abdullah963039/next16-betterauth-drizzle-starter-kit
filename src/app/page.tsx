import { Button } from '@/components/ui/button'
import { ArrowRightIcon } from 'lucide-react'
import Link from 'next/link'

export default async function Home() {
  return (
    <div className="flex min-h-dvh flex-col items-center justify-center gap-y-16">
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-semibold">
          Welcome To{' '}
          <span className="underline decoration-emerald-400 underline-offset-4">
            Authentication
          </span>{' '}
          Class
        </h1>
        <p>
          using{' '}
          <code className="rounded-2xl bg-neutral-200 px-2 py-1">
            better-auth
          </code>{' '}
          and{' '}
          <code className="rounded-2xl bg-neutral-200 px-2 py-1">
            drizzle-orm
          </code>
        </p>
      </div>

      <Button size={'lg'} asChild>
        <Link href="/signup">
          Get Started <ArrowRightIcon className="ml-1 size-4" />
        </Link>
      </Button>
    </div>
  )
}
