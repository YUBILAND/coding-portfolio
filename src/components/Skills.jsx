import React from 'react'
import BackdropCard from './BackdropCard'
import SkillsCard from './SkillsCard'

const Skills = () => {
  return (
    <BackdropCard id='Skills' title='Skills' className='py-12'>
      <div className='grid grid-cols-2 gap-8'>
        <SkillsCard icon='react' />
        <SkillsCard icon='aws' />
        <SkillsCard icon='mysql' />
        <SkillsCard icon='docker' />
        <SkillsCard icon='php' />
        <SkillsCard icon='express' />
        <SkillsCard icon='mongodb' />
      </div>
    </BackdropCard>
  )
}

export default Skills
