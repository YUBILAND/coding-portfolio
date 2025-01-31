import React from 'react'

const ProjectCardBottom = ({ item }) => {
  return (
    <div className='absolute bottom-0 flex h-fit w-full items-center justify-around py-4 text-xl font-semibold text-white [text-shadow:_0_1px_16px_rgb(0_0_0_/_100%)]'>
      <a
        href={item.website}
        className='rounded-xl bg-black bg-opacity-70 px-6 py-2 backdrop-blur transition-all duration-300 hover:scale-105'
      >
        Demo
      </a>

      <a
        href={item.github}
        className='rounded-xl bg-black bg-opacity-70 px-6 py-2 backdrop-blur transition-all duration-300 hover:scale-105'
      >
        Code
      </a>
    </div>
  )
}

export default ProjectCardBottom
