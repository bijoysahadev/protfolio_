import React from 'react'
import Flex from '../Components/Flex'
import Container from '../Components/Container'
import Image from '../Components/Image'
import AboutMe from '../src/assets/AboutMe.png'

const About = () => {
  return (
    <>
     <section id="about" className="py-16 lg:py-24 bg-gradient-to-b from-black via-slate-950 to-black relative overflow-hidden">
      
      {/* Decorative ambient background glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-72 h-72 lg:w-96 lg:h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <Container>
        {/* 
          1. flex-col: Stack elements vertically on mobile & tablet
          2. lg:flex-row: Switch to side-by-side columns on large screens/desktops
          3. gap-y-10 / lg:gap-x-12: Add proper vertical space for mobile and horizontal space for desktop
        */}
        <Flex className={`flex-col lg:flex-row items-center justify-between gap-y-10 lg:gap-x-12 px-4 lg:px-0`}>
          
          {/* 
            Image Column: 
            w-full on mobile/tablet, w-1/2 on large screens
          */}
          <div className="about-me-image w-full lg:w-1/2 relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-3xl blur-md opacity-30 group-hover:opacity-75 transition duration-500"></div>
            <div className="relative bg-slate-900 border border-slate-800 rounded-2xl p-3 shadow-2xl overflow-hidden">
              <Image src={AboutMe} className="w-full rounded-xl object-cover transform group-hover:scale-[1.02] transition duration-500" />
            </div>
          </div>

          {/* 
            Text Column: 
            w-full on mobile/tablet, w-1/2 on large screens
          */}
          <div className="about-me-text w-full lg:w-1/2 space-y-6 text-left">
            
            {/* Small pill badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold tracking-wider uppercase">
              <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></span>
              About Me
            </div>

            {/* Headline */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight">
              Crafting <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">digital experiences</span> with precision & passion.
            </h2>

            {/* Body text optimized for readability on mobile screens */}
            <p className="text-slate-300 text-sm sm:text-base lg:text-lg leading-relaxed font-normal">
              Hi, I'm <strong className="text-white font-semibold">Bijoy Saha Tonmoy</strong> — Frontend Developer & MERN Stack Specialist. I am a detail-oriented Frontend Web Developer based in Dhaka, Bangladesh, specializing in crafting high-performance, responsive, and visually clean web applications using React, Tailwind CSS, JavaScript (ES6+), and the MERN stack.
            </p>

            <p className="text-slate-400 text-xs sm:text-sm lg:text-base leading-relaxed">
              With a strong foundation in modern frontend workflows, component-driven design (Figma to code), and version control (Git/GitHub), I build scalable user interfaces designed for seamless user experiences. I thrive in async-first environments and am actively seeking remote frontend & full-stack developer opportunities worldwide.
            </p>

            {/* Tech badges highlights */}
            <div className="pt-2 flex flex-wrap gap-2">
              <span className="px-3 py-1 rounded-md bg-slate-900 border border-slate-800 text-indigo-300 text-xs font-medium">React.js</span>
              <span className="px-3 py-1 rounded-md bg-slate-900 border border-slate-800 text-indigo-300 text-xs font-medium">Tailwind CSS</span>
              <span className="px-3 py-1 rounded-md bg-slate-900 border border-slate-800 text-indigo-300 text-xs font-medium">JavaScript</span>
              <span className="px-3 py-1 rounded-md bg-slate-900 border border-slate-800 text-indigo-300 text-xs font-medium">MERN Stack</span>
              <span className="px-3 py-1 rounded-md bg-slate-900 border border-slate-800 text-indigo-300 text-xs font-medium">Remote Ready</span>
            </div>

          </div>

        </Flex>
      </Container>
     </section>
    </>
  )
}

export default About