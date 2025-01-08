import React from 'react'
import Layout from '../../../layout/Layout'
import { useState } from 'react'

const DeletedMembers = () => {
  const [count,setCount]=useState(0);
  return (
    <Layout>
    <div className='flex flex-col justify-center items-center'>
      <button onClick={()=>{setCount(count+1)}} className='bg-slate-400 p-1 rounded-md hover:scale-95'>Increment</button>
      <p>you have clicked {count} times </p>
      <button onClick={()=>{setCount(count -1)}} className='bg-slate-400 p-1 rounded-md hover:scale-95'>Decrement</button>
    </div>
    </Layout>
  )
}

export default DeletedMembers