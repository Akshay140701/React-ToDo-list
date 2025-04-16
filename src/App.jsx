"use client"
import { useState } from 'react'
import './App.css'

function App() {
  const [title, setFirst] = useState(" ")
  const [desc, setDesc] = useState(" ")
const [mainTask, setMainTask] = useState([ ])

  const SubmitHandler = (e)=> {
    e.preventDefault()
   setMainTask([...mainTask, {title,desc }]);
    setFirst("")
    setDesc("")
    console.log(mainTask)
  };

  const deleteHandler = (i) => {
    let copytask = [...mainTask]
    copytask.splice(i,1)
    setMainTask(copytask)
  }

 let renderTask = <h2>No TaskAvailable</h2>;

if(mainTask.length>0){
  renderTask = mainTask.map((t,i) => {
    return (
     <li key={i} className='flex items-center justify-between mb-8'>
      <div className='flex items-center justify-between mb-5 w-2/3'>
      <h5 className='text-2xl font-semibold'> {t.title}</h5>
      <h6 className='text-xl font-semibold'>{t.desc}</h6>
    </div>
    <button 
    onClick={() => {
      deleteHandler(i)
    }}
    className='bg-red-600 text-white
     px-4 py-2 rounded font-bold'>Delete</button>
     </li>
    );
 });
}

  return (
  <>
  <h1 className='bg-[black] text-white p-5 text-5xl
  font-bold text-center'>Akshay's ToDo List</h1>

  <form onSubmit={SubmitHandler}>
  <input type="text" className='text-2xl border-zinc-700
  border-2 m-8 p-x4 py-2'
  placeholder='Enter Title Here'
  value={title}
  onChange={(e)=> {
  setFirst(e.target.value)
  }}

  />

<input type="text" className='text-2xl border-zinc-700
  border-2 m-8 p-x4 py-2'
  placeholder='Enter Description Here'
  value={desc}
  onChange={(e)=> {
    setDesc(e.target.value)
  }}
  />
  <button className='bg-[black] text-white px-4 py-3 
  text-2xl font-bold rounded m-5'>Add Task</button>

  </form>

<hr />

<div className='p-8 bg-slate-400'>
  <ul>
    {renderTask}
  </ul>
</div>
  </>
  )
}

export default App
