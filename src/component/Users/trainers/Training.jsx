import React from 'react'

const Training = (props) => {
  return (
    <div>
        <input type='text' placeholder='Enter Name' onChange={(e)=>{props.setName(e.target.value)}} />
    </div>
  )
}

export default Training