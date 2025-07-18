import React from 'react'
import Nav from './Components/website/Nav'
import Index from './Components/website/Index'
import { Route, Routes } from 'react-router-dom'
import About from './Components/website/about'
import Contact from './Components/website/Contact'
import Services from './Components/website/Services'

const App = () => {
  return (
    <div>
     <Routes>
      <Route path='/' element={<Index></Index>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
         <Route path='/service' element={<Services></Services>}></Route>
     </Routes>
    </div>
  )
}

export default App
