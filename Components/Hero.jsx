import React from 'react'
import Profile from '../src/assets/profile.jpg'
import { animate, delay } from 'framer-motion'
import { easeIn } from 'motion'
import { motion } from 'framer-motion'
import { fadeInUp, nameTagAnimation, transitions } from '../src/Utilies/animation'
import Flex from '../Components/Flex'
import { Link } from 'react-router'
const Hero = () => {
  
    return (
      
        <div className='flex flex-col items-center justify-center  min-h-[70vh] text-center bg-[#F7F5F0]  ' >
            {/* image and name animation */}


            <div className='relative' >
                <div className='relative mb-8' >
                    {/* gradeitn effect */}
                    <div className='absolute inset-0 bg-gradient-to-b from-white/10 to-transparent rounded-full blur-xl' ></div>
                    {/* static protflio image */}
                    <div className='relative' >
                        <img src={Profile} alt="profile" className='w-32 h-32 rounded-full relative z-10' />
                    </div>
                    {/* aniamted name tag */}
                    <motion.div  initial={nameTagAnimation.initial} animate={nameTagAnimation.animate}
                     transition={nameTagAnimation.transition}  style={{
                        transformOrigin:"center center"
                     }} className='absolute -rotate-3 -top-0 -right-10  md:-right-28 z-30 bg-white text-black px-4 py-2 rounded-full shadow-lg' >
                        <p className='text-sm font-medium ' >Bijoy Saha Tonmoy</p>
                    </motion.div>
                </div>
            </div>
            
            {/* heading or titte */}
            <motion.h1  variants={fadeInUp}  initial="initial"  animate="animate" transition={{...transitions.default,delay:0.4}} className='md:text-5xl text-3xl px-2 md:px-0 font-medium mb-4 max-w-xl ' >
                <span className='bg-gradient-to-r from-purple-900 via-indigo-950 to-slate-900 !text-transparent bg-clip-text ' >
                    Hi! I’ Bijoy Saha</span><br />
                <span className='bg-gradient-to-r from-purple-700 via-purple-900 to-slate-800 !text-transparent bg-clip-text' > frontend web developer </span>
                <br />
                <span className='bg-gradient-to-r from-indigo-800 via-slate-800 to-gray-900 !text-transparent bg-clip-text' >based in Bangladesh.</span></motion.h1>
            {/* button */}
          <Flex className={`items-center justify-center`} >
              <motion.button  variants={fadeInUp}  initial="initial"  animate="animate" transition={{...transitions.default,delay:0.6}} className='mt-8 py-4 px-10 cursor-pointer border-2 border-indigo-950/30 text-indigo-950 font-medium hover:border-indigo-950 hover:bg-indigo-950/5 transition-all duration-300 rounded-full' >
              <Link to={`contact`} >Hire Me</Link></motion.button>
         <motion.a 
                    href="/resume.pdf" 
                    download="Bijoy_Saha_CV.pdf"
                    variants={fadeInUp} 
                    initial="initial" 
                    animate="animate" 
                    transition={{...transitions.default, delay: 0.6}} 
                    className='mt-8 py-4 px-10 cursor-pointer bg-indigo-950 text-white font-medium hover:bg-purple-900 transition-all duration-300 rounded-full shadow-lg shadow-indigo-950/10 inline-block'
                >
                    Download CV
                </motion.a>
          </Flex>
        </div>


    
    )
}

export default Hero