export interface TodoType {
  id: string;
  task: string;
  isComplete: boolean;
}

export interface TodoProps {
  tasks: TodoType[];
}

export interface TodoItemProps {
  todo: TodoType;
  editId: string | null;
  editText: string;
  setEditId: (id: string | null) => void;
  setEditText: (text: string) => void;
}
