import React from 'react'

const Header = ({ scrollFunc }) => {

  

  return (
    <div className='w-screen h-20 bg-[#c4bbff] flex justify-center items-center '>
        <div onClick={() => scrollFunc('project')} className='uppercase text-3xl w-fit cursor-pointer'>
            Projects
        </div>
    </div>
  )
}

export default Header