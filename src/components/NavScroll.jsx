import React, { useEffect, useState } from 'react'

const NavScroll = ({ scrollFunc }) => {
  const [section, setSection] = useState('')

  const sections = ['Matrix', 'About', 'Skills', 'Projects', 'Contact']

  const handleClick = item => {
    setSection(item)
    scrollFunc(item)
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setSection(entry.target.id) // Set the active section ID
          }
        })
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.75,
      },
    )

    sections.forEach(section => {
      if (document.getElementById(section))
        observer.observe(document.getElementById(section))
    })

    return () => {
      sections.forEach(section => {
        if (document.getElementById(section))
          observer.unobserve(document.getElementById(section))
      })
    }
  }, [])

  return (
    <div className='flex select-none flex-col items-center gap-2 rounded-3xl bg-[#0f0f0f] p-8 font-semibold uppercase'>
      {sections.map((item, index) => {
        return (
          <React.Fragment key={item}>
            {index ? (
              <>
                <hr className='w-4 opacity-50' />
                <hr className='w-4 opacity-50' />
                <hr className='w-4 opacity-50' />
              </>
            ) : null}
            <div
              onClick={() => handleClick(item)}
              className={`cursor-pointer transition-all duration-300 ${section === item ? 'scale-[1.1] [text-shadow:0px_0_50px_#fff,0_0_1px_#fff]' : 'opacity-60'}`}
            >
              {item}
            </div>
          </React.Fragment>
        )
      })}
    </div>
  )
}

export default NavScroll
