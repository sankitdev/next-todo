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
import { Schoolbell } from "next/font/google";
const school_bell = Schoolbell({ weight: ["400"] });
export default function Todo({ tasks }: TodoProps) {
  const [task, setTask] = useState("");
  const [editId, setEditId] = useState<string | null>(null);
  const [editText, setEditText] = useState("");
  const handleAdd = () => {
    if (!task.trim()) return;
    try {
      addTodo(task);
      setTask("");
    } catch (error) {
      console.error("Failed", error);
    }
  };

  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      className={`${styles.container} ${school_bell.className}`}
    >
      <Card className="w-full h-auto">
        <CardHeader>
          <CardTitle>Todo App</CardTitle>
          <CardDescription>Add Tasks to Test</CardDescription>
        </CardHeader>
        <CardContent>
          <motion.div className="flex gap-2">
            <Input
              id="task"
              placeholder="Enter task"
              value={task}
              onChange={(e) => setTask(e.target.value)}
            />
            <ParticleButton onClick={handleAdd}>Add</ParticleButton>
          </motion.div>
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
