import React, { useState } from 'react'
import { CiMail } from "react-icons/ci";

const Navbar = () => {

    const [isMenuOpen,setIsMenuOpen]=useState(false)
  return (
<header className='flex justify-between items-center p-6 relative border-b  border-gray-600'>
    <div className='flex items-center gap-2' ><span className='p-1 bg-gray-50/80 rounded-full text-black '><  CiMail /></span>
        <span className={`${isMenuOpen ? "hidden" :"block" }`} >bijoysaha144@gmail.com</span></div>
{/* mobile menu button */}
<div className='md:hidden z-50 ' onClick={()=>setIsMenuOpen(!isMenuOpen)} >
    <div className={`w-6 h-0.5 bg-gray-300 transition-all ${isMenuOpen? "rotate-45 translate-y-1.5 "  :""}`} ></div>
    <div className={`w-6 h-0.5 bg-gray-300 my-1.5 transition-all ${isMenuOpen? "opacity-0 "  :""}`} ></div>
    <div className={`w-6 h-0.5 bg-gray-300  transition-all ${isMenuOpen? "-rotate-45 -translate-y-1.5 "  :""}`} ></div>
   
</div>


    {/* desktop nabvigation */}
    <nav className='hidden md:block' >
    <ul  className='flex space-x-6' >
        <li><a className='text-gray-300 hover:text-white'  href="#">Lindin  </a>
        <span className='ml-2 text-gray-300' >/</span></li>
        <li><a className='text-gray-300 hover:text-white'  href="#">Github  </a>
        <span className='ml-2 text-gray-300' >/</span>
        </li>
        <li><a className='text-gray-300 hover:text-white'  href="#">Facebook</a></li>
    
    </ul>
    </nav>
    {/* mobile navaigation */}
    <nav className={`fixed md:hidden top-0 absolute right-0 h-screen w-64 bg-black/95 transform transition-transfrom duration-300 ease-in-out flex items-center justify-center z-40 ${isMenuOpen ? "translate-x-0 " : "translate-x-full  " }`} >
    <ul className='flex flex-col space-y-8 text-center' >
        <li><a onClick={()=> setIsMenuOpen(false)} className='text-gray-300 hover:text-white text-xl' href="#">Linkdin</a></li>
        <li><a onClick={()=> setIsMenuOpen(false)} className='text-gray-300 hover:text-white text-xl' href="#">Github</a></li>
        <li><a onClick={()=> setIsMenuOpen(false)} className='text-gray-300 hover:text-white text-xl' href="#">Facebook</a></li>
       
      
    </ul>
    </nav>
    {/* overlay */}
    {
        isMenuOpen && (
            <div className='fixed md:hidden inset-0 bg-black/50 z-30 'onClick={()=>setIsMenuOpen(false)} ></div>
        )
    }
</header>
  )
}

export default Navbar