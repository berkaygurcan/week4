import { TextField,InputLabel, Select, MenuItem, Box, Button } from '@mui/material'
import FormControl from '@mui/material/FormControl';
import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function FilterTodo({token,todoList, setTodoList, categoryList, statuList, setStatuList}:any) {

  const initialFilterState = {
    title: "",
    categoryId: null,
    statusId: null
  };

  const [filter, setFilter] = useState(initialFilterState) //interface yazılabilir
  const handleChange = (event: any) => {
    //textfield alanından değeri aldık
    
    const name = event.target.name
    const value = event.target.value  
   
    //filterimizi setleriz her değişiklikte 
    setFilter((prev: any) => ({...prev,[name]: value}))
    
  }
  
  //apiler için config
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  const handleFilter = () => {
    
    const filteredTodoList = todoList.filter((todo: any) => {
       return todo.categoryId === filter.categoryId 
    })
    setTodoList(filteredTodoList)
    console.log(filteredTodoList)
  }

  const handleResetFilter = () => {
     //filter ve filteredTodoList kısmını clear etmemiz lazım
     getTodoList().then(()=>{
      setFilter(initialFilterState)
     })
  }

  const getTodoList = async () => {
    const res = await axios.get("http://localhost:80/todo", config);
    setTodoList(res.data);
  };
  

  return (
    <div>
      <h3>Filter Todo Section</h3>
      <Box sx={{ minWidth: 120 , display: 'flex'  }}>
      <TextField id="filter-textfield-basic" value={filter.title} onChange={handleChange} name = "title" label="Outlined" variant="outlined" /> 
      <FormControl >
        <InputLabel id="demo-simple-select-label">Categorie</InputLabel>
        {/* Category Select */}
        <Select defaultValue="" sx={{width: 100}}
          labelId="demo-simple-select-label"
          onChange={handleChange}
          id="filter-category-select"
          value={filter.categoryId}
          name='categoryId'
          label="Age"
        >
          {categoryList.map((category:any) => (
            <MenuItem value={category.id}>{category.title}</MenuItem>
          ))}
         
        </Select>
      </FormControl>

      <FormControl >
        <InputLabel id="demo-simple-select-label">Status</InputLabel>
        {/* Category Select */}
        <Select defaultValue="" sx={{width: 100}}
          labelId="demo-simple-select-label"
          value={filter.statusId}
          id="filter-status-select"
          label="Age"
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>

      <Button variant="contained" onClick={handleFilter}>Filter</Button>

      <Button variant="contained" onClick={handleResetFilter}>Clear Filter</Button>

    </Box>

    </div>
  )
}
