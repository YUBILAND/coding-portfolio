import React, { useState } from 'react'
import HeaderTab from './HeaderTab'

const Header = ({ scrollFunc }) => {
  const header_items = ['About', 'Skills', 'Projects', 'Contact']

  const [showingHeader, setShowingHeader] = useState(true)

  return (
    <div className='fixed left-0 top-0 z-10 h-fit w-screen text-3xl font-semibold text-white'>
      <div
        onClick={() => setShowingHeader(!showingHeader)}
        className='absolute left-24 top-24 cursor-pointer rounded-3xl bg-white text-black'
      >
        Click me
      </div>

      <div className='flex justify-between px-8'>
        <HeaderTab item='David Chen' isShowingHeader={showingHeader} />

        <div className='flex justify-end gap-8'>
          {header_items.map(item => {
            return (
              <HeaderTab
                item={item}
                scrollFunc={scrollFunc}
                isShowingHeader={showingHeader}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Header
