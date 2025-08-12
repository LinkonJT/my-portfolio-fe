
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


function App() {
  

  return (
    <>
   <div className='flex flex-col min-h-screen bg-gray-500 '>

     <AppNavbar></AppNavbar>
    <main className='flex-grow max-w-10/12 mx-auto'>

<section id="home">
<HeroSection></HeroSection>
</section>
<section id="about">
  <About></About>
</section>
<section id="skills">
  <Skills></Skills>
</section>
<section id="education">
  <Education></Education>
</section>
<section id="experience">
  <Experience></Experience>
</section>
<section id="projects">
  <Projects></Projects>
</section>
      
<section id="contact">
  <Contact></Contact>
</section>
      
    </main>
      
      <AppFooter></AppFooter>
   </div>
    </>
  )
}

export default App
