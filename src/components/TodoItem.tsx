import type { Todos } from "../types"

export const TodoItem = ({todos}:{todos:Todos[]}) => {
    return (
        <div>
           <ul>
              {todos.map((item) => (
                <ul key={item.id}>
                   {item.isCompleted ? <input type = "checkbox" defaultChecked /> : <input type = "checkbox"/> }
                   <h3>{item.title}</h3>
                   <button>DELETE</button>
                   <button>EDIT</button>
                </ul>
              ) )}
           </ul>
        </div>
    )
}