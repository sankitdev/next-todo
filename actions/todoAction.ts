"use server";
import { eq, not } from "drizzle-orm";
import { revalidatePath } from "next/cache";
import { db } from "@/db/drizzle";
import { todo } from "@/db/schema";

export const getTodo = async () => {
  const data = await db.select().from(todo);
  return data;
};

export const addTodo = async (task: string) => {
  await db.insert(todo).values({ task });
  revalidatePath("/");
};
export const deleteTodo = async (id: string) => {
  await db.delete(todo).where(eq(todo.id, id));
  revalidatePath("/");
};
export const toggleTodo = async (id: string) => {
  await db
    .update(todo)
    .set({
      isComplete: not(todo.isComplete),
    })
    .where(eq(todo.id, id));
};
export const editTodo = async (id: string, task: string) => {
  await db
    .update(todo)
    .set({
      task: task,
    })
    .where(eq(todo.id, id));

  revalidatePath("/");
};
