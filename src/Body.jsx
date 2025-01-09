import React from 'react'
import Typing from 'react-typing-animation';

const Body = () => {
  return (

    <>
        <div className='w-full h-screen '>
            <img className='w-full h-screen object-cover object-bottom' src='project-imgs/body-bg.svg' alt="" />
        </div>

        <div className='absolute top-[30%] left-0 w-screen h-screen p-40'>
            
            <div className='w-fit mx-auto'>

                <div className='text-4xl text-[#1d3446]'>
                    <Typing speed={100}>
                        <span className='font-semibold [text-shadow:_3px_3px_0_rgb(255_255_255_/_40%)]'>Hi, my name is David.</span>
                    </Typing>
                </div>
                
            </div>

        </div>
    </>
  )
}

export default Body