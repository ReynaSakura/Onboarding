import { useQuery } from '@tanstack/react-query'
import { getAllTodos } from '@/api'

export const useTasksQuery = () => {
  return useQuery({
    queryKey: ['todos'],
    queryFn: getAllTodos,
  })
}