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
import { Schoolbell } from "next/font/google";
import { Button } from "./ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
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
    <Tabs
      defaultValue="all"
      className={`${styles.container} ${school_bell.className} motion-preset-expand `}
    >
      <Card className="w-full h-auto">
        <CardHeader>
          <CardTitle>Todo App</CardTitle>
          <CardDescription>Add Tasks to Test</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex gap-2">
            <Input
              id="task"
              placeholder="Enter task"
              value={task}
              onChange={(e) => setTask(e.target.value)}
              className="my-2"
            />
            <Button
              onClick={handleAdd}
              className="hover:motion-preset-confetti hover:motion-duration-1000"
            >
              Add
            </Button>
          </div>
          <TabsContent value="all">
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
          </TabsContent>
          <TabsContent value="pending">
            {tasks.map(
              (todo) =>
                !todo.isComplete && (
                  <TodoItem
                    key={todo.id}
                    todo={todo}
                    editId={editId}
                    setEditId={setEditId}
                    setEditText={setEditText}
                    editText={editText}
                  />
                )
            )}
          </TabsContent>
          <TabsContent value="complete">
            {tasks.map(
              (todo) =>
                todo.isComplete && (
                  <TodoItem
                    key={todo.id}
                    todo={todo}
                    editId={editId}
                    setEditId={setEditId}
                    setEditText={setEditText}
                    editText={editText}
                  />
                )
            )}
          </TabsContent>
        </CardContent>
        <TabsList className="grid w-4/5 m-auto grid-cols-3 mb-4">
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="pending">Pending</TabsTrigger>
          <TabsTrigger value="complete">Complete</TabsTrigger>
        </TabsList>
      </Card>
    </Tabs>
  );
}
