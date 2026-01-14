'use client'

import { useQuery } from '@tanstack/react-query'
import { getAllTodos } from '@/api'
import Task from "./Task";   

const TodoList = () => {
  const { data: tasks = [], isLoading } = useQuery({
    queryKey: ['todos'],
    queryFn: getAllTodos,
  })
  if (isLoading) return <p>Loading...</p>
  
  return (
    <div className="overflow-x-auto">
    <table className="table">
      {/* head */}
      <thead>
        <tr>
          <th>Tasks</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
          {tasks.map((task) => (
              <Task key={task.id} task={task}/>
          ))}
      </tbody>
    </table>
  </div>
  )
}

export default TodoList;