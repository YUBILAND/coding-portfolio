import clsx from 'clsx'
import React from 'react'
import { twMerge } from 'tailwind-merge'
import '../BackdropCard.css'

const cn = (...inputs) => twMerge(clsx(inputs))

const BackdropCard = ({ id, title, children, className }) => {
  return (
    <div id={id ? id : undefined} className='relative'>
      <div className='grid h-fit place-items-center'>
        <div
          id='neon'
          className='flex flex-col items-center gap-8 rounded-xl border-4 border-[#0f0f0f] bg-[#0f0f0f] px-12 py-8'
        >
          <div className='text-6xl font-semibold'>{title}</div>

          <div
            className={cn(
              `w-[800px] rounded-xl bg-[#0f0f0f] p-8 text-xl text-white shadow-[inset_0px_0px_10px_1px_#fff]`,
              className,
            )}
          >
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}

export default BackdropCard
