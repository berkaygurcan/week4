import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import axios from 'axios'
import React, { useEffect, useState } from 'react'


export interface Todo {
  id: number,
  title: string,
  createdAt: Date,
  updatedAt: Date,
  userId: number,
  categoryId: number,
  statusId: number
}

export default function TodoList({ token, todoList, setTodoList, categoryList, statuList, setStatuList }: any) {

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

  const handleChangeCategory = async(event: any) => {
    //generic func
    const name = event.target.name
    const value = event.target.value   
  
    if(name === "categoryId") {// eğer event category kısmından geliyorsa statü selectleri güncellememiz gerekir
      getStatus(value)
    }

  }

  const handleChangeStatu = () => {

  }

  const getStatus = async(categoryId:any) => {
    const res = await axios.get(`http://localhost:80/status?categoryId=${categoryId}`,config)
    console.log("response data ",res.data)
    setStatuList(res.data)
  }

  const getSingleStatu = async(statusId:any) => {
    const res = await axios.get(`http://localhost:80/status/${statusId}`,config)
    console.log("response data ",res.data)
    return res.data.title
  }
 
  return (
    <div>
      <ul>
        {todoList.map((todo: Todo) => {
          return (
            <li key={todo.id} style={{ marginBottom: 5 }}>
              {todo.title}
              <FormControl sx={{ marginLeft: 3 }}>
                <InputLabel id="demo-simple-select-label">Categorie</InputLabel>
                {/* Category Select */}
                <Select defaultValue={todo.categoryId} onChange={handleChangeCategory} name='categoryId' sx={{ width: 200 }}
                  labelId="demo-simple-select-label"
                  label="Age"
                >

                  {categoryList.map((category: any) => (
                    <MenuItem value={category.id}>{category.title}</MenuItem>
                  ))}

                </Select>
              </FormControl>

              <FormControl sx={{ marginLeft: 3 }}>
                <InputLabel id="demo-simple-select-label">Status</InputLabel>
                {/* Category Select */}
                <Select defaultValue={todo.statusId} name='statusId' sx={{ width: 200 }}
                  labelId="demo-simple-select-label"
                  label="Age"
                >
                  {statuList && statuList.map((statu: any) => 
                  {
                    console.log(statu.title) // her değişimde fazladan render ediliyor 
                   return <MenuItem value={statu.id}>{statu.title}</MenuItem>
                  }
                  )}

                </Select>
              </FormControl>
            </li>
          );
        })}
      </ul>
    </div>
  )
}
