import { useMutation, useQueryClient } from '@tanstack/react-query'
import { addTodo, deleteTodo, editTodo } from '@/api'

export const useTaskMutations = () => {
  const queryClient = useQueryClient()

  const addTask = useMutation({
    mutationFn: addTodo,
    onSuccess: () => {
      queryClient.invalidateQueries({ 
        queryKey: ['todos'] 
    })
    },
  })

  const deleteTask = useMutation({
    mutationFn: deleteTodo,
    onSuccess: () => {
      queryClient.invalidateQueries({ 
        queryKey: ['todos'] 
    })
    },
  })

  const editTask = useMutation({
    mutationFn: editTodo,
    onSuccess: () => {
      queryClient.invalidateQueries({ 
        queryKey: ['todos'] 
    })
    },
  })

  return { addTask, deleteTask, editTask }
}