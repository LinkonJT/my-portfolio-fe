
import './App.css'

import AppNavbar from './components/Shared/AppNavbar'
import AppFooter from './components/Shared/AppFooter'
import HeroSection from './components/Banner/HeroSection'
import About from './components/About'
import Skills from './components/Skills'


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
      
    </main>
      
      <AppFooter></AppFooter>
   </div>
    </>
  )
}

export default App
