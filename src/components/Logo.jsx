import React from 'react'

const Logo = ({ icon, redirect }) => {
  return (
    <a
      href={redirect}
      className='h-fit w-fit cursor-pointer select-none rounded-full bg-white p-1 transition-all duration-300 hover:scale-[1.1]'
    >
      <img className='h-12 w-12' src={`/logo-icons/${icon}.svg`} alt='' />
    </a>
  )
}

export default Logo
