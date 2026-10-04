import React, { useState } from 'react'
import { Outlet } from 'react-router'
import Navbar from '../Compoents/Navbar'
import Cursor from '../Compoents/CustomCursor'

const App = () => {

  return (
    
    <div className='min-h-screen overflow-hidden bg-black text-white' >
 
<Cursor/>
    <Navbar/>
     <main className='my-4' >
      <Outlet/>
     </main>
      <footer>Footer</footer>
    </div>
    
  )
}

export default App