import { Todo } from "../types";

const API_BASE_URL = "http://localhost:3000";

export const getTodos = async (): Promise<Todo[]> => {
  const response = await fetch(`${API_BASE_URL}/todos`);
  if (!response.ok) throw new Error("Network response was not ok");
  return response.json();
};

export const addTodo = async (newTodo: Omit<Todo, "id">): Promise<Todo> => {
  const response = await fetch(`${API_BASE_URL}/todos`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newTodo),
  });
  if (!response.ok) throw new Error("Failed to add todo");
  return response.json();
};

export const updateTodo = async (todoToUpdate: Todo): Promise<Todo> => {
  const response = await fetch(`${API_BASE_URL}/todos/${todoToUpdate.id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ completed: !todoToUpdate.completed }),
  });
  if (!response.ok) throw new Error("Failed to update todo");
  return response.json();
};

export const deleteTodo = async (id: number): Promise<{}> => {
  const response = await fetch(`${API_BASE_URL}/todos/${id}`, {
    method: "DELETE",
  });
  if (!response.ok) throw new Error("Failed to delete todo");
  return response.json();
};
