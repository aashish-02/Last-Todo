import React from "react";
import { AddTodo } from "../components/AddTodo";
import type { Todos } from "../types";
import { TodoItem } from "../components/TodoItem";

export const ActiveTodos = () => {
  const [Todos, setTodos] = React.useState<Todos[]>([]);
  const [editTodo, setEditTodo] = React.useState<string>("");
  console.log(Todos);

  function editebleTodo(todo: Todos) {
    setEditTodo(todo.title);
  }
  return (
    <div>
      <AddTodo setTodos={setTodos} editTodo={editTodo} />
      <TodoItem todos={Todos} editebleTodo={editebleTodo} />
    </div>
  );
};
