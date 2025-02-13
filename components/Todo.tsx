"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "./ui/input";
import { useState } from "react";
import { addTodo } from "@/actions/todoAction";
import { TodoProps } from "@/types/todoType";
import TodoItem from "./TodoItem";
import { styles } from "@/components/styles/todo";
import ParticleButton from "./kokonutui/particle-button";
import { motion } from "motion/react";
export default function Todo({ tasks }: TodoProps) {
  const [task, setTask] = useState("");
  const [editId, setEditId] = useState<string | null>(null);
  const [editText, setEditText] = useState("");
  const handleAdd = () => {
    if (!task.trim()) return;
    try {
      addTodo(task);
    } catch (error) {
      console.error("Failed", error);
    }
  };

  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      className={styles.container}
    >
      <Card className="w-full h-auto">
        <CardHeader>
          <CardTitle>Todo App</CardTitle>
          <CardDescription>Add Tasks to Test</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex">
            <Input
              id="task"
              placeholder="Enter task"
              value={task}
              onChange={(e) => setTask(e.target.value)}
            />
            <ParticleButton onClick={handleAdd}>Add</ParticleButton>
          </div>
          {tasks.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              editId={editId}
              setEditId={setEditId}
              setEditText={setEditText}
              editText={editText}
            />
          ))}
        </CardContent>
      </Card>
    </motion.div>
  );
}
