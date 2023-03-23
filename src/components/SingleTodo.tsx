import React, { useState } from 'react'
import { Todo } from '../model'
import {BiEdit} from "react-icons/bi"
import {RiDeleteBin5Line} from "react-icons/ri"
import {MdDone} from "react-icons/md"
interface Props{
    todo:Todo,
    key:number,
    setTodos:React.Dispatch<React.SetStateAction<Todo[]>>,
    todos:Todo[]
}

const SingleTodo = ({todo,setTodos,key,todos}:Props) => {
  const [edit,setEdit]=useState<boolean>(false)
  const [editTodo,setEditTodo]=useState<string>(todo.todo)
  const handleDone=(id:number)=>{
    setTodos(
      todos.map((todo)=>
      todo.id===id ? {...todo,isDone:!todo.isDone} :todo
    )
    )
  }
  const handleDelete=(id:number)=>{
    setTodos(todos.filter((todo)=>todo.id !== id))
  }
  const handleEdit=(e: React.FormEvent ,id:number)=>{
    e.preventDefault()
    setTodos(
      todos.map((todo)=>todo.id===id ?{...todo,todo:editTodo}: todo
    ))
    setEdit(false)

  }
  return (
    <form className='flex content-between w-[300px] min-w-[90%]  md:w-[450px] p-5 m-auto mt-4 rounded-2xl bg-[#E49393]' onSubmit={(e)=>handleEdit(e,todo.id)}>
       
       {
        edit ? (
          <input  value={editTodo} onChange={(e)=>setEditTodo(e.target.value)} className="outline-none  w-11/12 text-lg p-1 rounded-md border-[#408E91] border-2 " style={{ overflowWrap: 'break-word' }}/>
        ): 
            todo.isDone ? 
            (
            <s className=' p-1 border-none  w-11/12 text-lg' style={{ overflowWrap: 'break-word' }}> {todo.todo}</s>
            ) :(
            <span className=' p-1 border-none  w-11/12 text-lg' style={{ overflowWrap: 'break-word' }}> {todo.todo}</span>)
       }
 
   
      <div className='flex items-center '>

        <span className='ml-5 cursor-pointer' onClick={
          ()=>{
            console.log("clicked")
              if(!edit && !todo.isDone){
                setEdit(!edit)
              }
        }
        }> <BiEdit/></span>

        <span  className='ml-5 cursor-pointer'onClick={()=>{handleDelete(todo.id)}}> <RiDeleteBin5Line /></span>

        <span className='ml-5 cursor-pointer' onClick={()=>{handleDone(todo.id)}}> <MdDone /></span>

      </div>
    </form>
  )
}

export default SingleTodo
