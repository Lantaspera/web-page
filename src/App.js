import React from 'react'
import HomePage from './Components/HomePage'

import { useEffect } from 'react'
import Contact from './Components/Contact'
import About from './Components/About'
import Services from './Components/Services'
import FooterSect from './Components/FooterSect'
import TeamMembers from './Components/TeamMembers'
import Portfolio from './Components/Portfolio'


const App = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    
    
 
    
  <div>
    {/* <HomePage/> */}
    <Services/>
    <Portfolio/>
    <About/>
    <TeamMembers/>
    <Contact/> 
    <FooterSect/>
   
  </div>
  
    
    
  )
}

export default App
