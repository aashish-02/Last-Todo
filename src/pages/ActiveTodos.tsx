import React from "react";
import { AddTodo } from "../components/AddTodo";
import type { Todos } from "../types";
import { TodoItem } from "../components/TodoItem";

export const ActiveTodos = () => {
  const [Todos, setTodos] = React.useState<Todos[]>([]);
  return (
    <div>
      <AddTodo setTodos={setTodos} />
      <TodoItem todos = {Todos} />
    </div>
  );
};
