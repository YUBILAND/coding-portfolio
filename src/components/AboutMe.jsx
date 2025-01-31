import React from 'react'
import Highlighter from 'react-highlight-words'
import BackdropCard from './BackdropCard'

const AboutMe = () => {
  const content =
    'I am a recent graduate from the University at Buffalo with a Bachelor’s in Computer Science. Having switched majors early in my academic journey, I entered the field with minimal experience but quickly discovered a deep passion for technology. My first web application, created in a software engineering class, gave me a sense of accomplishment that solidified my love for coding and problem-solving. With a strong focus on React.js and front-end development, I am eager to start my career as a web developer, leveraging my skills to build dynamic, user-focused applications and contribute to innovative teams.'

  const contentArr = content.split('. ')
  // console.log(contentArr[0])

  const Highlight = ({ children, highlightIndex }) =>
    !highlightIndex ? (
      <strong className='bg-transparent text-blue-400'>{children}</strong>
    ) : highlightIndex === 1 ? (
      <strong className='bg-transparent text-red-400'>{children}</strong>
    ) : highlightIndex === 2 ? (
      <strong className='bg-transparent text-[#228B22]'>{children}</strong>
    ) : highlightIndex === 3 ? (
      <strong className='bg-transparent text-[#FF8C00]'>{children}</strong>
    ) : highlightIndex === 4 ? (
      <strong className='bg-transparent text-[#800020]'>{children}</strong>
    ) : highlightIndex === 5 ? (
      <strong className='bg-transparent text-[#4B0082]'>{children}</strong>
    ) : (
      <strong className='bg-transparent text-[#00008B]'>{children}</strong>
    )

  return (
    <BackdropCard id='About' title='About me'>
      <Highlighter
        highlightClassName=''
        highlightTag={Highlight}
        searchWords={[
          contentArr[0],
          contentArr[1],
          contentArr[2],
          contentArr[3],
        ]}
        autoEscape={true}
        textToHighlight={content}
      />
    </BackdropCard>
  )
}

export default AboutMe
