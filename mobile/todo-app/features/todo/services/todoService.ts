import { Todo } from "../models/todo";

const API_BASE_URL = "http://localhost:3000";

export const getTodos = async (): Promise<Todo[]> => {
  const response = await fetch(`${API_BASE_URL}/todos`);

  return response.json();
};

export const addTodo = async (newTodo: Omit<Todo, "id">): Promise<Todo> => {
  const response = await fetch(`${API_BASE_URL}/todos`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newTodo),
  });

  return response.json();
};

export const updateTodo = async (todoToUpdate: Todo): Promise<Todo> => {
  const response = await fetch(`${API_BASE_URL}/todos/${todoToUpdate.id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ 
      completed: !todoToUpdate.completed 
    }),
  });
  
  return response.json();
};

export const deleteTodo = async (id: number): Promise<{}> => {
  const response = await fetch(`${API_BASE_URL}/todos/${id}`, {
    method: "DELETE",
  });
  return response.json();
};
