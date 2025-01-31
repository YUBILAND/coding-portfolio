import React from 'react'

const ProjectCardTop = ({ item }) => {
  return (
    <div className='absolute top-0 flex h-fit w-full items-center justify-around bg-black bg-opacity-70 py-4 text-xl font-semibold text-white backdrop-blur [text-shadow:_0_1px_16px_rgb(0_0_0_/_100%)]'>
      <div className='select-none transition-all duration-300 group-hover:scale-125'>
        {item.name}
      </div>
    </div>
  )
}

export default ProjectCardTop
