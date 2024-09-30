import { pgTable, serial, text, timestamp } from 'drizzle-orm/pg-core';

export const questions = pgTable('questions', {
    id: serial('id').primaryKey(),
    userId: text('user_id').notNull(),
    question: text('question').notNull(),
    createdAt: timestamp('created_at').defaultNow().notNull(),
    updatedAt: timestamp('updated_at').defaultNow().notNull(),
});

// export type Question = typeof questions.$inferSelect;
