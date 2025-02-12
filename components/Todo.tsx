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
import { addTodo, deleteTodo, toggleTodo } from "@/actions/todoAction";
import { todoType } from "@/types/todoType";
import { Button } from "./ui/button";
import { Checkbox } from "./ui/checkbox";
import { Label } from "./ui/label";
import { Pencil, Trash2 } from "lucide-react";
interface Todo {
  tasks: todoType[];
}
export default function Todo({ tasks }: Todo) {
  const [task, setTask] = useState("testing");
  const handleAdd = () => {
    if (!task.trim()) return;
    try {
      addTodo(task);
    } catch (error) {
      console.error("Failed", error);
    }
  };
  const handleEdit = () => {};
  const handleDelete = (id: string) => {
    if (!id) return;
    try {
      deleteTodo(id);
    } catch (error) {
      console.error("Failed", error);
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
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
            <Button onClick={handleAdd}>Add</Button>
          </div>
          {tasks.map((todo) => (
            <div key={todo.id} className="flex justify-between gap-2 my-2">
              <div className="flex items-center justify-center gap-2">
                <Checkbox
                  id={todo.id}
                  defaultChecked={todo.isComplete}
                  onCheckedChange={() => toggleTodo(todo.id)}
                />
                <Label htmlFor={todo.id} className="text-lg">
                  {todo.task}
                </Label>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Pencil onClick={handleEdit} />
                <Trash2
                  onClick={() => handleDelete(todo.id)}
                  className="text-red-500"
                />
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
