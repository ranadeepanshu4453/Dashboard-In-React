import React, { useState } from 'react'
import Layout from '../../../layout/Layout'

const Staff = () => {
  const [content1,setContent1] = useState(false);
  const [content2,setContent2] = useState(true);

  function handleContent(){
    setContent1(!content1);
    setContent2(!content2);
  }
  return (
    <Layout>
    <div className='flex flex-col'>
      <span className='border-2 border-black p-2 m-2'>
        <button onClick={handleContent} className='bg-blue-300 p-1 rounded-md scale-95'>Show Content</button><br />
      <span className={content1 ? 'show' : 'hidden'}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam atque illo enim, quod modi nemo commodi repudiandae blanditiis dicta incidunt pariatur perferendis aspernatur ipsum repellendus quidem doloremque at architecto est!<br></br>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt eaque maiores quas officia asperiores quidem! Non facere aperiam quod adipisci, aliquam error vel. Blanditiis nihil illum quis, cumque voluptas rerum.
      </span>
      </span>
      <span className='border-2 border-black p-2 m-2'>
      <button onClick={handleContent} className='bg-blue-300 p-1 rounded-md scale-95' >Show Content</button><br />
      <span className={content1 ? 'hidden' : ''}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam atque illo enim, quod modi nemo commodi repudiandae blanditiis dicta incidunt pariatur perferendis aspernatur ipsum repellendus quidem doloremque at architecto est!<br></br>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt eaque maiores quas officia asperiores quidem! Non facere aperiam quod adipisci, aliquam error vel. Blanditiis nihil illum quis, cumque voluptas rerum.
      </span>
      </span>
    </div>
    </Layout>
  )
}

export default Staff