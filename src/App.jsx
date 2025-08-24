
import './App.css'

import AppNavbar from './components/Shared/AppNavbar'
import AppFooter from './components/Shared/AppFooter'
import HeroSection from './components/Banner/HeroSection'
import About from './components/About'
import Skills from './components/Skills'
import Education from './components/Education'
import Experience from './components/Experience'
import Projects from './components/Projects/Projects'
import Contact from './components/Contact'
import TestMotion from './components/testMotion'


function App() {
  

  return (
    <>
     <div className='flex flex-col min-h-screen bg-blue-900'>

     <AppNavbar></AppNavbar>
    <main className='flex-grow w-full md:max-w-10/12 mx-auto'>

  <section id="home" className="scroll-mt-16">
    <HeroSection></HeroSection>
  </section>
  <section id="about" className="scroll-mt-16 md:scroll-mt-13">
    <About></About>
  </section>
  <section id="skills" className="scroll-mt-16 md:scroll-mt-13">
    <Skills></Skills>
  </section>
  <section id="education" className="scroll-mt-16 md:scroll-mt-13">
    <Education></Education>
  </section>
  <section id="experience" className="scroll-mt-16 md:scroll-mt-13">
    <Experience></Experience>
  </section>
  <section id="projects" className="scroll-mt-16 md:scroll-mt-13">
    <Projects></Projects>
  </section>
      
  <section id="contact" className="scroll-mt-16 md:scroll-mt-13">
    <Contact></Contact>
  </section>
      
    </main>
      
      <AppFooter></AppFooter>
     </div>
    </>
    )
}

export default App
