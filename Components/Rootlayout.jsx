import React from 'react'
import Navbar from './Navbar'
import Footer from '../Pages/Footer'
import { Outlet } from 'react-router'

const Rootlayout = () => {
  return (
    <div>
        <Navbar/>
        <Outlet/>
       <Footer/>
    </div>
  )
}

export default Rootlayout