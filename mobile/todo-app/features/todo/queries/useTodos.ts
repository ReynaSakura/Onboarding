import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { addTodo, deleteTodo, getTodos, updateTodo } from "../services/todoService";
import { Todo } from "../models/todo";

export const useTodos = () => {
  const queryClient = useQueryClient();

  const {
    data: todos = [],
    isLoading,
    isError,
    error,
  } = useQuery<Todo[]>({
    queryKey: ["todos"],
    queryFn: getTodos,
  });

  const addTodoMutation = useMutation({
    mutationFn: (newTodo: Omit<Todo, "id">) => addTodo(newTodo),
    onSuccess: () => {
      queryClient.invalidateQueries({ 
        queryKey: ["todos"] 
      });
    },
  });

  const updateTodoMutation = useMutation({
    mutationFn: (todoToUpdate: Todo) => updateTodo(todoToUpdate),
    onSuccess: () => {
      queryClient.invalidateQueries({ 
        queryKey: ["todos"] 
      });
    },
  });

  const deleteTodoMutation = useMutation({
    mutationFn: (id: number) => deleteTodo(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ 
        queryKey: ["todos"] 
      });
    },
  });


  return {
    todos,
    isLoading,
    isError,
    error,
    addTodo: addTodoMutation.mutate,
    updateTodo: updateTodoMutation.mutate,
    deleteTodo: deleteTodoMutation.mutate,
  };
};
