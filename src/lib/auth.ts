import { db } from '@/drizzle/db'
import { betterAuth } from 'better-auth'
import { drizzleAdapter } from 'better-auth/adapters/drizzle'
import { nextCookies } from 'better-auth/next-js'
import * as schema from '@/drizzle/schema'

export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: 'pg',
    schema: {
      user: schema.UserTable,
      account: schema.AccountTable,
      session: schema.SessionTable
    }
  }),
  emailAndPassword: {
    enabled: true,
    autoSignIn: true
  },
  plugins: [nextCookies()]
})
