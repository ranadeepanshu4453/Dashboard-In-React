import React, { useState } from 'react';
import Layout from '../../../layout/Layout';
import Training from './Training';

const Trainer = () => {
  const [name, setName] = useState("");
  const [isActive1, setIsActive1] = useState(false);
  const [isActive2, setIsActive2] = useState(false);
  const [content,setContent]=useState("");

  const toggleVisibility1 = () => {
    setIsActive1(prev => !prev);
  };

  const toggleVisibility2 = () => {
    setIsActive2(prev => !prev);
  };

  return (
    <Layout>
      <div className='flex flex-col gap-10 mt-10 justify-center items-center'>
        <Training name={name} setName={setName} />
        <p>Name is: {name}</p>
      </div>
      <div className='flex flex-col gap-7 m-5'>
        <div>
          <button className='p-1 bg-slate-400 rounded-md m-5' onClick={toggleVisibility1}>
            {isActive1 ? 'Hide' : 'Show'} Content 1
          </button>
          <span className={isActive1 ? '' : 'hidden'}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt cupiditate doloribus consequatur corporis modi sequi facilis quo quod quidem, at mollitia eos, ratione rem, saepe obcaecati accusantium et. Dicta, consequatur?
          </span>
        </div>
        <div>
          <button className='p-1 bg-slate-400 rounded-md m-5' onClick={toggleVisibility2}>
            {isActive2 ? 'Hide' : 'Show'} Content 2
          </button>
          <span className={isActive2 ? '' : 'hidden'}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt cupiditate doloribus consequatur corporis modi sequi facilis quo quod quidem, at mollitia eos, ratione rem, saepe obcaecati accusantium et. Dicta, consequatur?
          </span>
        </div>
      </div>
      <div className='flex gap-10'>
        <input type='text' placeholder="Enter Something!!!" value={content} onChange={(e)=>{setContent(e.target.value)}} />
        <input type='text' placeholder="Enter Something!!!" value={content} onChange={(e)=>{setContent(e.target.value)}} />
      </div>
    </Layout>
  );
}

export default Trainer;
