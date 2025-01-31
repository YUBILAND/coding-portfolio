import React from 'react'
import '../Animation.css'
import Name from './Name'

const Hi = () => {
  return (
    <>
      <div id='Matrix' className='relative'>
        <div className='container'>
          <div className='box' style={{ '--flip': 1 }}></div>
          <div className='box' style={{ '--flip': -1 }}></div>
        </div>
        <Name />
      </div>
    </>
  )
}

export default Hi
