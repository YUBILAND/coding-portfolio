import './App.css'
import AboutMe from './components/AboutMe'
import Contact from './components/Contact'
import Hi from './components/Hi'
import Projects from './components/Projects'
import Skills from './components/Skills'

import Copyright from './components/Copyright'
import NavScroll from './components/NavScroll'
import ProfilePicture from './components/ProfilePicture'
import { GenshinContextProvider } from './contexts/GenshinContext'

function App() {
  const scrollToProject = id => {
    // console.log(id)
    setTimeout(() => {
      document.getElementById(id).scrollIntoView({
        behavior: 'smooth',
        block: `${id === 'Matrix' ? 'start' : 'center'}`,
      })
    })
  }

  // document.body.style.cursor = "genshin_mouse_cur.cur";

  return (
    <GenshinContextProvider>
      <div className='flex w-screen flex-col gap-4'>
        {/* <Header scrollFunc={scrollToProject} /> */}
        <div className='fixed left-0 top-[calc(50%_-_128px)] z-10 pl-8'>
          <NavScroll scrollFunc={scrollToProject} />
        </div>
        <ProfilePicture className='absolute top-10 z-10 mx-auto w-screen' />

        <Hi />
        <div className='flex flex-col gap-48'>
          <AboutMe />
          <Skills />
          <Projects />
          <Contact />
        </div>
      </div>

      <div className='flex justify-end'>
        <Copyright />
      </div>
    </GenshinContextProvider>
  )
}

export default App
