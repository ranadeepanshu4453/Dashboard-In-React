import React from 'react'
import Layout from '../../layout/Layout'
import Inner_Inner from './Inner_Inner'

const Inner = () => {
  return (
    <Layout>
        <div className='p-3'>
            <h1>Inner PT</h1>
            <Inner_Inner />
        </div>
    </Layout>
  )
}

export default Inner