import { boolean, pgTable, text, uuid } from "drizzle-orm/pg-core";

export const todo = pgTable("todo", {
  id: uuid("id").primaryKey().defaultRandom(),
  task: text("task").notNull(),
  isComplete: boolean("isComplete").default(false).notNull(),
});
