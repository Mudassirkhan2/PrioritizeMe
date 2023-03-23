import { useState } from "react"
import InputFeild from "./components/InputFeild"
import Todolist from "./components/Todolist"
import { Todo } from "./model"
function App() {
  const[todo,setTodo]=useState<string>("")
  const[todos,setTodos]=useState<Todo[]>([])
  const handleAdd =(e:React.FormEvent)=>{
         e.preventDefault();
         if(todo){
          setTodos([...todos,{id:Date.now(),todo:todo,isDone:false}])
          setTodo("")
         }
         console.log(todos)
  }
  return (
    <div className=" app ">
      <h1 className="mt-4  md:mt-7 text-center text-4xl z-10  font-RampartOne" >PrioritizeMe</h1> 

      <InputFeild  todo ={todo} setTodo ={setTodo} handleAdd = {handleAdd}/>
      <Todolist todos={todos} setTodos={setTodos}/>
     
    </div>
  )
}

export default App
