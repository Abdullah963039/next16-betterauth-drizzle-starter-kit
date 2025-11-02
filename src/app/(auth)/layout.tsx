import { ReactNode } from 'react'

interface AuthLayoutProps {
  children: ReactNode
}

export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div className="bg-primary/5 flex min-h-dvh flex-col items-center justify-center">
      {children}
    </div>
  )
}
