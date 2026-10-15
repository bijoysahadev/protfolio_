import React, { useState } from 'react'
import Rootlayout from '../Compoents/Rootlayout'
import Navbar from '../Compoents/Navbar'
import Cursor from '../Compoents/CustomCursor'
import Home from '../Pages/Home'
import {Route,Routes,createBrowserRouter,RouterProvider, createRoutesFromElements} from 'react-router' 
import About from '../Pages/About'
import Projects from '../Pages/Projects'
import Contact from '../Pages/Contact'
import CustomCursor from '../../../CustomCursor'

import Service from '../Pages/Service'
const App = () => {

   const router =createBrowserRouter(
    createRoutesFromElements(<Route path='/'  element={<Rootlayout/>}>
<Route index element={<Home/>} />
    <Route path='about' element={<About/>} />
  
    <Route path='projects' element={<Projects/>} />
    
    <Route path='service' element={<Service/>} />
    <Route path='contact' element={<Contact/>} />
  
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