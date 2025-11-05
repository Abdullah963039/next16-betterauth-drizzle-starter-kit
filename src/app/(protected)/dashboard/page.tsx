import { Button } from '@/components/ui/button'
import { SignoutButton } from '@/features/auth/components/signout-button'
import { currentUser } from '@/features/auth/lib/current-user'
import { requireAuth } from '@/features/auth/lib/utils'

export default async function Page() {
  await requireAuth('/signup')

  const user = await currentUser()

  return (
    <div className="flex h-dvh w-full flex-col items-center justify-center gap-8 p-6">
      <div className="bg-secondary flex w-full max-w-3xl flex-col gap-4 rounded-lg p-8">
        {Object.entries(user).map((entry, idx) => (
          <div
            key={idx}
            className="flex items-center justify-between font-mono text-sm"
          >
            <span>{entry[0]}</span>
            <span className="rounded-full bg-neutral-200 px-2 py-1 text-xs font-semibold">
              {JSON.stringify(entry[1])}
            </span>
          </div>
        ))}
      </div>
      <SignoutButton>
        <Button>Logout</Button>
      </SignoutButton>
    </div>
  )
}
