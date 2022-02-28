import AddTodo from './AddTodo'
import React, {useState} from 'react'
import FilterTodo from './FilterTodo'
import AddCategoryModal from './AddCategoryModal'
import TodoList from './TodoList'
export default function MainComponent() {
    const [open, setOpen] = useState<boolean>(false)
    const handleToggle = () => {
      setOpen(!open);
    }
  return (
    <div>
       <FilterTodo />
        <AddTodo />
       <TodoList />
        {/*  modal */}
        <AddCategoryModal />
    </div>
  )
}
