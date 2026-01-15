import { useQuery } from '@tanstack/react-query'
import { getAllTodos } from '@/api'

export const tasksQuery = () => {
  return useQuery({
    queryKey: ['todos'],
    queryFn: getAllTodos,
  })
}