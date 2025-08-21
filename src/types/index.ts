export interface Todos {
    id:any,
    title: string,
    isCompleted: boolean,
}

export type ChildProp = {
    setTodos: React.Dispatch<React.SetStateAction<Todos[]>>
}