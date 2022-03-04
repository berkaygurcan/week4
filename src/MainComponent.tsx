import AddTodo from "./AddTodo";
import React, { useState } from "react";
import FilterTodo from "./FilterTodo";
import AddCategoryModal from "./AddCategoryModal";
import TodoList, { Todo } from "./TodoList";
import { Category } from "./AddCategoryModal";
import { Statu } from "./EditStatuModal";

export default function MainComponent(props: any) {
  const [categoryList, setCategoryList] = useState<Category[]>([]);
  const [statuList, setStatuList] = useState<Statu[]>([]);
  const [todoList, setTodoList] = useState<Todo[]>([]);

  const [open, setOpen] = useState<boolean>(false);
  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <div>
      <FilterTodo
        token={props.token}
        todoList={todoList}
        setTodoList={setTodoList}
        categoryList={categoryList}
        statuList={statuList}
        setStatuList={setStatuList}
      />
      {/* props olarak statu list verilebilir mi?  */}
      <AddTodo
        token={props.token}
        categoryList={categoryList}
        statuList={statuList}
        setStatuList={setStatuList}
        todoList={todoList}
        setTodoList={setTodoList}
      />

      <TodoList
        token={props.token}
        todoList={todoList}
        setTodoList={setTodoList}
        categoryList={categoryList}
        statuList={statuList}
        setStatuList={setStatuList}
      />
      {/*  modal */}
      <AddCategoryModal
        token={props.token}
        categoryList={categoryList}
        setCategoryList={setCategoryList}
        statuList={statuList}
        setStatuList={setStatuList}
      />
    </div>
  );
}
