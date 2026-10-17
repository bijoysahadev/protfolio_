import React from 'react'
import Flex from '../Components/Flex'
import Container from '../Components/Container'
const Service = () => {
  return (
    <section className={`py-20 bg-black`} >
      <Container>
        <h1 className={` py-3 text-center font-bold text-[56px] mx-auto text-white  `} >Services</h1>
       
          <div className={` w-full `} >
            <Flex className={` flex flex-col md:flex-row items-stretch  justify-between gap-6 `} >



{/* 70 */}
              <div className=' p-4 w-full md:w-[70%] bg-black border border-white/10 rounded-2xl p-10 group cursor-pointer ' >
                <div className='w-11 h-11 bg-white flex items-center justify-center text-black border border-gray-200 shadow-sm rounded-md transition-all duration-300 group-hover:bg-amber-300 group-hover:scale-110 mb-6 font-mono font-bold' >01</div>
                <h2 className='  text-[36px] text-white font-bold mb-4 leading-tight' >Frontend Web Development & Responsive Design</h2>
                <p className='text-gray-300 text-lg leading-relaxed font-normal' >Building responsive, fast, pixel-perfect user interfaces using React, Tailwind CSS, and modern web standards.</p>
              </div>

              {/* 30 */}
              <div className=' p-4 w-full md:w-[30%]  bg-amber-300 rounded-2xl p-10 group cursor-pointer flex flex-col justify-between'  >
                <div className={`w-11 h-11 bg-black flex items-center justify-center text-white rounded-md transition-all duration-300 group-hover:scale-110 mb-6 font-mono font-bold`} >
                  <span>02</span>
                </div>
                <h2 className='  text-[28px] text-black font-bold mb-4 leading-tight' >MERN Stack Development</h2>
                <p className="text-zinc-800 text-base leading-relaxed">
                  Building responsive, fast, pixel-perfect user interfaces using React, Tailwind CSS, and modern web standards.
                </p>
              </div>

            </Flex>


            {/*  */}

    <Flex className={` py-4 flex flex-col md:flex-row items-stretch  justify-between gap-7 `} >



{/* 30 */}
                <div className=' p-4 w-full md:w-[30%]  bg-amber-300 rounded-2xl p-10 group cursor-pointer flex flex-col justify-between'  >
                <div className={`w-11 h-11 bg-black flex items-center justify-center text-white rounded-md transition-all duration-300 group-hover:scale-110 mb-6 font-mono font-bold`} >
                  <span>03</span>
                </div>
                <h2 className='  text-[28px] text-black font-bold mb-4 leading-tight' >UI/UX to Code Conversion</h2>
                <p className="text-zinc-800 text-base leading-relaxed">
               Converting Figma and XD designs into pixel-perfect, clean, maintainable, and interactive web components.
                </p>
              </div>

              {/* 70 */}
           
 <div className=' p-4 w-full md:w-[70%] bg-black border border-white/10 rounded-2xl p-10 group cursor-pointer ' >
                <div className='w-11 h-11 bg-white flex items-center justify-center text-black border border-gray-200 shadow-sm rounded-md transition-all duration-300 group-hover:bg-amber-300 group-hover:scale-110 mb-6 font-mono font-bold' >04</div>
                <h2 className='  text-[36px] text-white font-bold mb-4 leading-tight' >API Integration & Backend Development</h2>
                <p className='text-gray-300 text-lg leading-relaxed font-normal' >Designing RESTful APIs, handling user authentication, and integrating MongoDB databases for full-stack application performance.</p>
              </div>
            </Flex>

            {/*  */}
          </div>

      </Container>
    </section>
  )
}
// {/* flex flex-col lg:flex-row items-stretch justify-between gap-6 */}
export default Service