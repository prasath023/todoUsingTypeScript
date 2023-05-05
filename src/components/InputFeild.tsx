import React from 'react'
import { toEditorSettings } from 'typescript';
interface Props{
  todo:string;
  setTodo:React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}
const InputFeild = ({todo,setTodo,handleAdd}: Props) => {
  console.log(todo);
  
  return (
    <div className='flex justify-center items-center'>
      <form onSubmit={handleAdd} action="submit" >
      <input value={todo} onChange={
        (e)=>{setTodo(e.target.value)}
      } className='relative outline-none rounded-full w-96 h-10 p-5' type="text" placeholder='enter here' name="searchBar"></input></form>
      <button type="button" onClick={handleAdd} className="hover:bg-blue-300  active:scale-75 absolute duration-300 ease-in-out ml-96 mr-12 w-9 p-1 h-9 rounded-full bg-blue-200 ">Go</button>
      </div>
  )
}

export default InputFeild