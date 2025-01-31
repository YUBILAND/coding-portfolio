import React from 'react'

const ChatbotContainer = ({ children }) => {
  return (
    <div className='mx-auto grid h-screen w-[1200px] grid-rows-4'>
      {children}
    </div>
  )
}

export default ChatbotContainer
