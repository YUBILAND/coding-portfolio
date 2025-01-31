import React from 'react'
import './SpeechStem.css'

const SpeechBubble = ({ message }) => {
  return (
    <div>
      <div
        id='speech_bubble'
        className='relative w-fit cursor-pointer select-none bg-[#d1d1d1] px-16 py-8 transition-all duration-300 after:cursor-pointer after:bg-[#d1d1d1] after:duration-300 hover:scale-[1.05] after:hover:scale-[1.05]'
      >
        {message}
      </div>
    </div>
  )
}

export default SpeechBubble
