import { Button } from '@/components/ui/button'
import { SignoutButton } from '@/features/auth/components/signout-button'

export default function page() {
  return (
    <div className="flex h-dvh w-full flex-col items-center justify-center p-6">
      Protected page
      <SignoutButton>
        <Button>Logout</Button>
      </SignoutButton>
    </div>
  )
}
