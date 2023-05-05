import React from 'react'
import { Droppable } from 'react-beautiful-dnd';
import { Todo } from './model';
import SingleTodo from './SingleTodo';

type Props={
    todos:Todo[];
    setTodos:React.Dispatch<React.SetStateAction<Todo[]>>;
}
function TodoList({todos,setTodos}:Props) {
  
  return (
    <div className='flex'>

   {

<div className='flex flex-1 w-screen px-40  justify-evenly flex-wrap'>{todos.map((todo,index)=>(<SingleTodo  todo={todo} setTodos={setTodos} todos={todos} key={todo.id} />))}</div>

   }
  
    </div>

   
  )
}

export default TodoList