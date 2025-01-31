import React from 'react'
import Response from './Response'

const Responses = () => {
  const responses = ['Who are you?', 'Hello there', "How'd I get here?"]

  return (
    <div className='row-start-4 grid justify-self-center text-2xl'>
      <div className='flex flex-col gap-4'>
        <Response response={responses[0]} />
        <Response response={responses[1]} />
        <Response response={responses[2]} />
      </div>
    </div>
  )
}

export default Responses
