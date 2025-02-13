import { Pencil, Trash2 } from "lucide-react";
import { Checkbox } from "./ui/checkbox";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Button } from "./ui/button";
import { deleteTodo, editTodo, toggleTodo } from "@/actions/todoAction";
import { styles } from "@/components/styles/todo";
import { TodoItemProps } from "@/types/todoType";

export default function TodoItem({
  todo,
  editId,
  setEditText,
  setEditId,
  editText,
}: TodoItemProps) {
  const handleDelete = (id: string) => {
    if (!id) return;
    try {
      deleteTodo(id);
    } catch (error) {
      console.error("Failed", error);
    }
  };
  return (
    <div className={styles.taskRow}>
      <div className={styles.actionGroup}>
        <Checkbox
          id={todo.id}
          defaultChecked={todo.isComplete}
          onCheckedChange={() => toggleTodo(todo.id)}
        />
        {editId !== todo.id ? (
          <Label htmlFor={todo.id} className="text-lg">
            {todo.task}
          </Label>
        ) : (
          <Input
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
          />
        )}
      </div>
      <div className={styles.taskRow}>
        {editId !== todo.id ? (
          <Pencil
            onClick={() => {
              setEditText(todo.task);
              setEditId(todo.id);
            }}
          />
        ) : (
          <Button
            className="bg-blue-400 hover:bg-blue-600"
            onClick={() => {
              editTodo(editId, editText);
              setEditId(null);
            }}
          >
            Save
          </Button>
        )}

        {editId !== todo.id ? (
          <Trash2
            onClick={() => handleDelete(todo.id)}
            className="text-red-500 hover:text-red-600"
          />
        ) : (
          <Button
            className="bg-red-500 hover:text-red-600"
            onClick={() => setEditId(null)}
          >
            Cancel
          </Button>
        )}
      </div>
    </div>
  );
}
