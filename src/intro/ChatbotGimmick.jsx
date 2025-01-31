import React from 'react'
import SpeechBubble from './SpeechBubble'

const ChatbotGimmick = () => {
  const message = 'Hi.'

  return (
    <div className='row-span-2 row-start-2 content-center justify-self-center text-7xl'>
      <SpeechBubble message={message} />
    </div>
  )
}

export default ChatbotGimmick
