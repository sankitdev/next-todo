import { getTodo } from "@/actions/todoAction";
import ParticlesBackground from "@/components/kokonutui/particles-background";
import Todo from "@/components/Todo";

export default async function Home() {
  const todo = await getTodo();
  return (
    <ParticlesBackground>
      <Todo tasks={todo} />
    </ParticlesBackground>
  );
}
