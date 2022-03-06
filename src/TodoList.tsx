import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import TodoItem from "./TodoItem";

export interface Todo {
  id: number;
  title: string;
  createdAt: Date;
  updatedAt: Date;
  userId: number;
  categoryId: number;
  statusId: number;
}

export default function TodoList({
  token,
  todoList,
  setTodoList,
  categoryList,
  statuList,
  setStatuList,
}: any) {
  useEffect(() => {
    getTodoList();
  }, []);

  //apiler için config
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  const getTodoList = async () => {
    console.log("get Todo list fonksiyonu çalıştı")
    const res = await axios.get("http://localhost:80/todo", config);
    console.log("todo response = ",res.data)
    setTodoList(res.data);
    console.log(todoList)
    
  };

 

  return (
    <div>
      <ul>
        {todoList.map((todo: Todo) => (
          <TodoItem todo = {todo} token = {token} categoryList= {categoryList} getTodoList= {getTodoList}/>
        ))}
      </ul>
    </div>
  );
}
