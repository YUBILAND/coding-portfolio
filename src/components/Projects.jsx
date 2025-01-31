import React from 'react'
import BackdropCard from './BackdropCard'
import ProjectCard from './ProjectCard'

const Projects = () => {
  return (
    <BackdropCard
      id='Projects'
      title='Projects'
      className='flex w-fit gap-24 p-16'
    >
      <ProjectCard />
    </BackdropCard>
  )
}

export default Projects
