import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import React from 'react'

const Response = ({ response }) => {
  return (
    <div className='flex h-fit cursor-pointer select-none items-center gap-2 rounded-xl border-2 border-[#d1d1d1] bg-white px-6 py-2 shadow-xl transition-all duration-300 hover:scale-[1.05] hover:bg-[#d1d1d1]'>
      <div>
        <ChevronRightIcon />
      </div>
      {response}
    </div>
  )
}

export default Response
