import { Task } from "./types";

export const getAllTodos = async ():Promise<Task[]> => {
  const res = await fetch(`http://localhost:3001/tasks`,{
    cache:"no-store", //SSR or CSR
  });
  const todos = res.json();

  return todos;
};

export const addTodo = async (todo: Task):Promise<Task[]> => {
  const res = await fetch(`http://localhost:3001/tasks`,{
    method: "POST",
    headers: {
      "Conent-Type" : "application/json",
    },
    body: JSON.stringify(todo),
  });
  const newtodos = res.json();

  return newtodos;
};