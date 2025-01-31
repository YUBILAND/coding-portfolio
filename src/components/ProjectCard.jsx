import React from 'react'
import ProjectCardBottom from './ProjectCardBottom'
import ProjectCardTop from './ProjectCardTop'

const ProjectCard = () => {
  const project_items = [
    {
      name: 'Wordle Clone',
      website: 'https://wordle.david-chen.org/',
      github: 'https://github.com/YUBILAND/wordle-clone',
      img: 'project-imgs/wordle-img.png',
    },
    {
      name: 'Apple Clone',
      website: 'https://apple.david-chen.org/',
      github: 'https://github.com/YUBILAND/apple-clone',
      img: 'project-imgs/apple-img.png',
    },
  ]
  return (
    <>
      {project_items.map(item => {
        return (
          <div
            key={item.name}
            className='group relative rounded-lg text-white shadow-none transition-shadow duration-300 hover:shadow-[0px_0_50px_#fff]'
          >
            <div className='relative flex h-[500px] w-[350px] items-center justify-center rounded-lg border-8 border-gray-300 bg-white p-3 opacity-80 transition-all duration-300 hover:scale-105 hover:opacity-100'>
              <img src={item.img} className='h-full w-80 rounded-lg' alt='' />

              <ProjectCardTop item={item} />

              <ProjectCardBottom item={item} />
            </div>
          </div>
        )
      })}
    </>
  )
}

export default ProjectCard
