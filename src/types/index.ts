export interface Todos {
  id: any;
  title: string;
  isCompleted: boolean;
  isImportent: boolean;
}

export type ChildProp = {
  setTodos: React.Dispatch<React.SetStateAction<Todos[]>>;
  editTodo: string,
};

export type EditebleTodoProps = (todo: Todos) => void;
