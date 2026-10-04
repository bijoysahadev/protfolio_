import React from 'react'
import Profile from '../src/assets/profile.jpg'
const Hero = () => {
    return (
        <div className='flex flex-col items-center justify-center  min-h-[70vh] text-center ' >
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
                    <div className='absolute -rotate-6 -top-0  -right-28 z-30 bg-white text-black px-4 py-2 rounded-full shadow-lg' >
                        <p className='text-sm font-medium ' >Bijoy Saha Tonmoy</p>
                    </div>
                </div>
            </div>
            {/* heading or titte */}
            <h1 className='md:text-5xl text-3xl px-2 md:px-0 font-medium mb-4 max-w-xl ' >
                <span className='bg-gradient-to-r from-white vai-gray-300 to-gray-500 text-transparent bg-clip-text ' >
                    Hi! I’ Bijoy Saha</span><br />
                <span className='bg-gradient-to-r from-gray-300 via-gray-400 to-gray-500 text-transparent bg-clip-text' > frontend web developer </span>
                <br />
                <span className='bg-gradient-to-r from-gray-500 via-gray-600 to-gray-700 text-transparent bg-clip-text' >based in Bangladesh.</span></h1>
            {/* button */}
            <button className='mt-8 py-4 px-12 cursor-pointer border border-gray-600 text-gray-600 hover:border-gray-400 hover:text-white transition-colors rounded-full' >Latest Shots</button>
        </div>
    )
}

export default Hero