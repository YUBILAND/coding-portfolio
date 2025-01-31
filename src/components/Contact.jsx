import React from 'react'
import Logo from './Logo'

const Contact = () => {
  return (
    <>
      <div id='Contact' className='flex h-60 flex-col items-center gap-4'>
        <div className='flex gap-8'>
          <Logo icon={'github'} redirect={'https://github.com/YUBILAND'} />
          <Logo
            icon={'linkedin'}
            redirect='https://www.linkedin.com/in/david-chen-11b243344/'
          />
        </div>
        <div className='text-[#62666a]'>
          Contact me at: yubiland922@gmail.com
        </div>
      </div>
    </>
  )
}

export default Contact
