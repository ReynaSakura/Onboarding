'use client'

import { useTasksQuery } from '../hooks/useTasksQuery'
import TodoItem from "./TodoItem";   

const TodoList = () => {
  const { data: tasks = [], isLoading } = useTasksQuery()

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
              <TodoItem key={task.id} task={task}/>
          ))}
      </tbody>
    </table>
  </div>
  )
}

export default TodoList;