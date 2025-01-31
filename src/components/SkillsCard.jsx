import React from 'react'

const SkillsCard = ({ icon, children }) => {
  const iconText = {
    react: 'React',
    aws: 'AWS',
    mysql: 'MySQL',
    docker: 'Docker',
    php: 'PHP',
    express: 'Express.js',
    mongodb: 'mongoDB',
  }
  return (
    <div className='flex h-14 items-center gap-4 rounded-3xl border-2 border-[#707070] bg-[#292929] transition-all duration-300 hover:scale-[1.05]'>
      <div className='h-fit w-fit rounded-full bg-white p-2'>
        <img className='h-12 w-12' src={`/logo-icons/${icon}.svg`} alt='' />
      </div>
      <div className='w-[60%] py-2 text-center'>{iconText[icon]}</div>
    </div>
  )
}

export default SkillsCard
