import React, { useRef } from 'react'
interface Props{
  todo:string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd:(e:React.FormEvent)=>void
}


const InputFeild = ({todo ,setTodo,handleAdd}:Props) => {
  const inputRef =useRef<HTMLInputElement>(null)
  return (
  <form  className='flex w-11/12 md:w-2/5 relative items-center ' 
       onSubmit={(e)=>{handleAdd(e);
      inputRef.current?.blur()
  }}>
  <input type="text" placeholder='Enter a task'
    ref={inputRef}
     value={todo}
     onChange={
      (e)=>setTodo(e.target.value)
     }
     className='w-full rounded-full px-4  mt-3 text-2xl border-none  transtition duration-200 focus:outline-none focus:shadow-focus  py-4 ' />
  
  <button type='submit' className='absolute right-0 m-3  w-12 h-12  rounded-full border-none bg-blue-600 text-white text-base shadow-buttonshadow hover:bg-blue-900 active:scale-75'> Go</button>

    
  </form>      

  )
}

export default InputFeild
