import { pgTable, text, timestamp } from 'drizzle-orm/pg-core'
import { createdAt, updatedAt } from '../helpers'

export const VerificationTable = pgTable('verification', {
  id: text('id').primaryKey(),
  identifier: text('identifier').notNull(),
  value: text('value').notNull(),
  expiresAt: timestamp('expires_at').notNull(),
  createdAt,
  updatedAt
})
