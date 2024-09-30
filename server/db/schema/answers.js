export const answers = pgTable('answers', {
    id: serial('id').primaryKey(),
    userId: text('user_id').notNull(),
    questionId: text('question_id').notNull(),
    answer: text('anwser').notNull(),
    createdAt: timestamp('created_at').defaultNow().notNull(),
    updatedAt: timestamp('updated_at').defaultNow().notNull(),
});
