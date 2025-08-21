import React from "react";
import Style from "./addTodo.module.css";
import type { ChildProp } from "../types";
import { genrateId } from "../helper/getId";

export const AddTodo = ({ setTodos }: ChildProp) => {
  const [todo, setTodo] = React.useState<string>("");
  let value: string | null;
  let isImportent: boolean;
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    const selectElement = document.getElementById("Importent");
    if (selectElement instanceof HTMLSelectElement) {
      value = selectElement.value;
    }

    value === "Importent" ? (isImportent = true) : (isImportent = false);
    e.preventDefault();
    setTodos((prev) => [
      ...prev,
      { id: genrateId(), title: todo, isCompleted: false, isImportent },
    ]);
    setTodo("");
  }
  return (
    <div className={Style.outerContainer}>
      <div className={Style.searchContainer}>
        <select className={Style.statusSelector} name="Status" id="Importent">
          <option value="Regular">Regular</option>
          <option value="Importent">Importent</option>
        </select>
        <form onSubmit={handleSubmit}>
          <input
            className={Style.input}
            type="text"
            placeholder="Enter your task"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
          />
          <button className={Style.todobtn} type="submit">
            Add Todo
          </button>
        </form>
      </div>
    </div>
  );
};
