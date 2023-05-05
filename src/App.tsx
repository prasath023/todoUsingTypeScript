import React, { useState } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import InputFeild from './components/InputFeild';
import { Todo } from './model';
import TodoList from './TodoList';
const App:React.FC =()=> {
  const [todo,setTodo]=useState<string>("")
  const [todos,setTodos]=useState<Todo[]> ([])
  const [completed,setCompleted]=useState<Todo[]>([])
  
  const handleAdd=(e:React.FormEvent)=>{
     e.preventDefault();
     if(todo){
       setTodos([...todos,{id: Date.now(),todo,isDone:false}])
       setTodo("")
     }
  }
  
  
  return (
        <div className='bg-blue-200 min-h-screen'>
    <div className="flex h-44  flex-col justify-around items-center" >
     <span className="flex justify-center font-semibold items-center h-20 text-4xl ">TasK ManaGer</span>
     <InputFeild todo={todo} setTodo={setTodo} handleAdd={handleAdd}/>
    </div>
    <div>
     
        <TodoList todos={todos} setTodos={setTodos} 
        
        />
    
    </div>
   
    </div>

  
  );
}

export default App;
