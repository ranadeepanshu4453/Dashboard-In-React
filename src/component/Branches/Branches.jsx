import React, { useState } from 'react'
import Layout from '../../layout/Layout'
import Content from './Content';

const Branches = () => {
    const [name,setName]=useState('Deepanshu');
    const [edit,setEdit]=useState(false);
        
    function handleName(){
        setEdit(!edit);
    }
    
  return (
    <Layout>
            <h1>Branches</h1>
            <div className='flex flex-col gap-5 justify-center items-center'>
                <span className='flex flex-row gap-3 justify-center items-center'>
                    {edit ? <input type="text" placeholder="Name" value={name} onChange={(e)=>setName(e.target.value)} /> : <h1>{name}</h1>}
                <button className='bg-blue-300 p-1 rounded-lg' onClick={handleName}>{edit ? 'Save' : 'Edit'}</button>
                <button className='bg-red-300 p-1 rounded-lg'>Delete</button>
                </span>
                
                <div>
                    <Content />
                </div>
            </div>
    </Layout>
  )
}

export default Branches