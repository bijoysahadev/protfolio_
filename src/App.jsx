import React, { useState } from 'react'
import Rootlayout from '../Components/Rootlayout'
import Navbar from '../Components/Navbar'
import Cursor from '../Components/CustomCursor'
import Home from '../Pages/Home'
import {Route,Routes,createBrowserRouter,RouterProvider, createRoutesFromElements} from 'react-router' 
import About from '../Pages/About'
import Projects from '../Pages/Projects'



import Service from '../Pages/Service'
import ContactMe from '../Pages/ContactMe'
const App = () => {
  

   const router =createBrowserRouter(
    createRoutesFromElements(<Route path='/'  element={<Rootlayout/>}>
<Route index element={<Home/>} />
    <Route path='about' element={<About/>} />
  
    <Route path='projects' element={<Projects/>} />
    
    <Route path='service' element={<Service/>} />
    <Route path='contact' element={<ContactMe/>} />
  
    </Route>)
  )
  return (
    
    <div className='min-h-screen overflow-hidden bg-black text-white' >
     <RouterProvider  router={router} />
 <Cursor/>

    </div>
    
  )
}

export default App