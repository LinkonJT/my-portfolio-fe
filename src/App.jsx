
import './App.css'

import AppNavbar from './components/Shared/AppNavbar'
import AppFooter from './components/Shared/AppFooter'


function App() {
  

  return (
    <>
   <div className='flex flex-col min-h-screen '>

     <AppNavbar></AppNavbar>
    <main className='flex-grow max-w-10/12 mx-auto'>


      
    </main>
      
      <AppFooter></AppFooter>
   </div>
    </>
  )
}

export default App
