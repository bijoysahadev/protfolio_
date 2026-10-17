import React from 'react'
import { motion } from 'framer-motion'
import { fadeInUp, transitions } from '../src/Utilies/animation'
const Footer = () => {
  return (
    <motion.footer variants={fadeInUp} initial='initial' animate='animate' transition={{...transitions.default, delay:0.4}} className='py-8 px-4 md:px-6 border-t border-gray-800/50 bg-[#080808]' >
<div className='max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 ' >
  <p> &copy; 2026 All rights reserved to Bijoy Saha Tonmoy</p>
  <div  className='flex gap-4 mt-4 md:mt-0 ' >
    <a  className={`hover:text-white transition-colors`} href="#">LinkedIn</a>
   <span>/</span>
    <a  className={`hover:text-white transition-colors`} href="#">Drible</a>
   <span>/</span>
    <a  className={`hover:text-white transition-colors`} href="#">Instragram</a>
   <span>/</span>
  </div>
</div>
    </motion.footer>
  )
}

export default Footer