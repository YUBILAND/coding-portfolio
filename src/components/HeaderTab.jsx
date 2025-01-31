import React from 'react'

const HeaderTab = ({ item, scrollFunc, isShowingHeader }) => {
  return (
    <div
      onClick={scrollFunc ? () => scrollFunc(item) : undefined}
      className={`relative cursor-pointer overflow-hidden rounded-b-[2rem] bg-[#0f0f0f] px-8 py-6 transition-all duration-300 after:absolute after:bottom-[12px] after:left-[calc(50%-32px)] after:h-1 after:w-16 after:rounded-md after:bg-[#68ab63] after:opacity-0 after:transition-opacity after:duration-300 after:ease-[cubic-bezier(.2,1.05,.4,.88)] after:hover:opacity-100 ${isShowingHeader ? 'h-full max-h-20 py-6 opacity-100' : 'h-full max-h-0 py-0 opacity-0'}`}
    >
      {item}
    </div>
  )
}

export default HeaderTab
