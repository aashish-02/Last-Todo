import type { EditebleTodoProps, Todos } from "../types";

export const TodoItem = ({
  todos,
  editebleTodo,
}: {
  todos: Todos[];
  editebleTodo: EditebleTodoProps;
}) => {
  function toggleCheckbox(item: Todos) {
    item.isCompleted = !item.isCompleted;
    console.log(todos);
  }
  return (
    <div>
      <ul>
        {todos.map((item) => (
          <ul key={item.id}>
            {item.isCompleted ? (
              <input
                type="checkbox"
                defaultChecked
                onClick={() => toggleCheckbox(item)}
              />
            ) : (
              <input type="checkbox" onClick={() => toggleCheckbox(item)} />
            )}
            <h3>{item.title}</h3>
            <button>DELETE</button>
            <button onClick={() => editebleTodo(item)}>EDIT</button>
          </ul>
        ))}
      </ul>
    </div>
  );
};
