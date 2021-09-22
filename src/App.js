import React from 'react'
import HomePage from './Components/HomePage'

import { useEffect } from 'react'


const App = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    
    
 
    
  <div>
    <HomePage/>
  </div>
  
    
    
  )
}

export default App
