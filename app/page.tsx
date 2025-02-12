import { getTodo } from "@/actions/todoAction";
import Todo from "@/components/Todo";

export default async function Home() {
  const todo = await getTodo();
  return <Todo tasks={todo} />;
}
