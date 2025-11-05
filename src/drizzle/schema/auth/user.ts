import { boolean, pgTable, text } from 'drizzle-orm/pg-core'
import { createdAt, updatedAt } from '../helpers'

export const UserTable = pgTable('user', {
  id: text('id').primaryKey(),
  name: text('name').notNull(),
  email: text('email').notNull().unique(),
  emailVerified: boolean('email_verified').default(true).notNull(), // True by default, could be changed and implement email verfication service
  image: text('image'),
  createdAt,
  updatedAt
})
