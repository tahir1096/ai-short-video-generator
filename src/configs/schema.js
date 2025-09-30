import { pgTable } from "drizzle-orm/pg-core";
import { Subscript } from "lucide-react";

export const Users= pgTable('users', {
    id: serial('id').primaryKey(),
    name: varchar('name', { length: 256 }).notNull(),
    email: varchar('email', { length: 256 }).notNull().unique(),
    createdAt: timestamp('created_at').defaultNow().notNull(),
    imageURL: varchar('image_url'),
    subscription: boolean('subscription').default(false).notNull()
})