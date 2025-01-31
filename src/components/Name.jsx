import React from 'react'

const Name = () => {
  // const [slide, setSlide] = useState(false);
  return (
    <div className='relative'>
      <div className='flex h-[600px] w-screen items-end justify-center'>
        <div className='select-none text-[200px] font-bold leading-[0.75] transition-all duration-500 [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]'>
          <div id='reflect'>Hi,</div>
        </div>
      </div>
      <div className='flex h-[600px] w-screen items-start justify-center'>
        <div className='select-none text-[200px] font-bold leading-[0.75] transition-all duration-500 [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]'>
          <div id='reflect'>I'm David.</div>
        </div>
      </div>

      {/* <div className='rounded-[5rem] border-[3rem] border-[#0f0f0f] px-64 py-48 text-[200px] font-bold backdrop-blur-none transition-all duration-500 [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)] hover:backdrop-blur-2xl'>
        Hi, I'm David
      </div> */}
    </div>
  )
}

export default Name
