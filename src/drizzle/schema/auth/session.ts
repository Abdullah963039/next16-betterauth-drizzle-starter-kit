import { pgTable, text, timestamp } from 'drizzle-orm/pg-core'
import { UserTable } from './user'
import { createdAt, updatedAt } from '../helpers'

export const SessionTable = pgTable('session', {
  id: text('id').primaryKey(),
  expiresAt: timestamp('expires_at').notNull(),
  token: text('token').notNull().unique(),
  createdAt,
  updatedAt,
  ipAddress: text('ip_address'),
  userAgent: text('user_agent'),
  userId: text('user_id')
    .notNull()
    .references(() => UserTable.id, { onDelete: 'cascade' })
})
