import AddTodo from './AddTodo'
import React from 'react'
import FilterTodo from './FilterTodo'

export default function MainComponent() {
  return (
    <div>
        <AddTodo />
        <FilterTodo />
        <button>Kategori ekle</button>
        {/*  modal */}
    </div>
  )
}
