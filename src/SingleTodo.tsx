import React, { useState } from 'react'
import { Draggable } from 'react-beautiful-dnd';
import { Todo } from './model';
type Props={
    todos:Todo[];
    todo:Todo;
    setTodos:React.Dispatch<React.SetStateAction<Todo[]>>;
}
function SingleTodo({todo,todos,setTodos}:Props) {

  const [edit,setEdit]=useState<boolean>(false)
  const [editTodo,setEditTodo]=useState<string>("")

  const handleDone=(id:number)=>{
      setTodos(todos.map((todo)=>(todo.id===id?{...todo,isDone:!todo.isDone}:todo)))
  }
  const handleDelete=(id:number)=>{
    setTodos(todos.filter((todo)=>(todo.id!==id)))
}
const handleEdit=(e:React.FormEvent,id:number)=>{
  e.preventDefault()
  setTodos(todos.map(todo=>(todo.id===id?{...todo,todo:editTodo}:todo)))
  setEdit(false)
}
  return (
   
      
       <div  className='flex justify-evenly items-end my-8 mx-4 border-1 rounded-full  flex-wrap flex-row bg-yellow-100'>
       <div className='flex justify-center p-3'> <form action="submit" className='flex justify-evenly items-center'  onSubmit={(e)=>(handleEdit(e,todo.id))}>
         {edit?<input className='relative outline-none rounded-full w-80 h-5 p-5' value={editTodo} onChange={(e)=>(setEditTodo(e.target.value))}/>:(todo.isDone?<s>{todo.todo}</s>:<h1>{todo.todo}</h1>)}
          <div>
            <span className='mx-2 p-2 rounded-full bg-red-300' onClick={()=>{if(!edit && !todo.isDone){
              setEdit(!edit)
            }}}>edit</span>
            <span className='mx-2 p-2  rounded-full bg-red-300' onClick={()=>(handleDelete(todo.id))}>delete</span>
            <span className='mx-2 p-2  rounded-full bg-red-300' onClick={()=>(handleDone(todo.id))}>done</span>
            </div>
            </form>
        </div>
    </div>

      

   
   
  )
}

export default SingleTodo