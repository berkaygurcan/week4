import axios from 'axios'
import React, { useEffect, useState } from 'react'


interface Todo {
  id: number,
  title: string,
  createdAt: Date,
  updatedAt: Date,
  userId: number,
  categoryId: number,
  statusId: number
}

export default function TodoList({ token }: any) {
 
  const [todoList, setTodoList] = useState<Todo[]>([])

  useEffect(() => {
    getTodoList() 
  },[])

   //apiler için config
   const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  const getTodoList = async () => {
    const res =  await axios.get("http://localhost:80/todo",config)
    setTodoList(res.data)
  }

 
  return (
    <div>
      <ul>
        {todoList.map((todo) => (
          <li key={todo.id}>
            {todo.title}
          </li>
        ))}
      </ul>
    </div>
  )
}
