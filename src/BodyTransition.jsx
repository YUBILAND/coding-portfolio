import React from 'react'

const BodyTransition = () => {
  return (
    <div className='bg-[#1d3446] text-[#c4bbfe] w-screen h-[1000px] pt-[100px]'>

        <div id='project' className='pb-[100px] w-fit mx-auto text-4xl font-semibold'>
            Here are my projects
        </div>

        <div className='grid grid-cols-2 gap-24 justify-items-center w-fit mx-auto'>
            
            <div className='text-white relative group'>

                <div className='border-8 border-gray-300 bg-white  w-[350px] h-[500px] flex justify-center items-center rounded-lg transition-all hover:scale-105 duration-300 p-3 relative'>
                    
                    <img src="project-imgs/wordle-img.png" className='w-80 h-full rounded-lg ' alt="" />

                    <div className='absolute bottom-0 w-full h-fit bg-gray-300 bg-opacity-70 flex justify-around items-center text-[#41b834] font-semibold text-xl py-4 backdrop-blur'>
                        <a href='/' className='hover:scale-105 transition-all duration-300 '>
                            Demo
                        </a>

                        <a href='/' className='hover:scale-105 transition-all duration-300 '>
                            Code
                        </a>
                    </div>
                </div>
            </div>
            

            <div className='text-white relative group'>

                {/* <div className='absolute w-fit h-20 font-bold z-10 left-0 right-0 mx-auto top-[50%] translate-y-[-50%] text-4xl group-hover:text-5xl transition-all duration-300 text-transparent bg-clip-text bg-gradient-to-r from-[#088ef7] via-[#ca58d2] to-[#f55310]'>
                    Apple Clone
                </div> */}

                <div className='border-8 border-gray-300 bg-white w-[350px] h-[500px] flex justify-center items-center rounded-lg transition-all hover:scale-105 duration-300 p-3 relative'>

                    <img src="project-imgs/apple-img.png" className='w-80 h-full rounded-lg' alt="" />

                    <div className='absolute bottom-0 w-full h-fit bg-gray-300 bg-opacity-70 flex justify-around items-center  font-semibold text-xl py-4 backdrop-blur'>
                        <a href='/' className='hover:scale-105 transition-all duration-300 text-transparent bg-clip-text bg-gradient-to-r from-[#088ef7] via-[#ca58d2] to-[#f55310]'>
                            Demo
                        </a>

                        <a href='/' className='hover:scale-105 transition-all duration-300 text-transparent bg-clip-text bg-gradient-to-r from-[#088ef7] via-[#ca58d2] to-[#f55310]'>
                            Code
                        </a>
                    </div>

                </div> 
            </div>

        </div>
    </div>
  )
}

export default BodyTransition