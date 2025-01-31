import React from 'react'

const ProfilePicture = ({ className }) => {
  return (
    <div className={className}>
      <div className='flex justify-center'>
        <div
          id='neon'
          className='flex h-72 w-fit items-center justify-center rounded-full bg-black'
        >
          <img
            className='h-64 w-fit [clip-path:circle(40%)]'
            src='/photos/japan-photo-crop.JPG'
            alt=''
          />
        </div>
      </div>
    </div>
  )
}

export default ProfilePicture
