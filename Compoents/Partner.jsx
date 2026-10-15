import React from 'react'
import Code from '../src/assets/logo/code.svg'
import html from '../src/assets/logo/html.svg'
import bootsrap from '../src/assets/logo/bootstrap.svg'
import reactLogo from  '../src/assets/logo/react.svg'
import github from  '../src/assets/logo/github.svg'
import JS from  '../src/assets/logo/js.png'
import Tal from  '../src/assets/logo/tailwind1.svg'
import Tal2 from  '../src/assets/logo/tailwind2.svg'
import Css from  '../src/assets/logo/css.png'
import Vite from  '../src/assets/logo/Vite.png'
import { div, image } from 'framer-motion/client'
const Partner = () => {
    const partner =[
        {
            name :"CodeACademy",image :html,
        },
        {
            name :"CodeACademy",image :reactLogo,
        },
        {
            name :"CodeACademy",image :bootsrap,
        },
        {
            name :"CodeACademy",image :Code,
        },
        {
            name :"CodeACademy",image :github,
        },
        {
            name :"CodeACademy",image :JS,
        },
        {
            name :"CodeACademy",image :Tal,
        },
        {
            name :"CodeACademy",image :Tal2,
        },
        {
            name :"CodeACademy",image :Css,
        },
        {
            name :"CodeACademy",image :Vite,
        },
    ]
    const duplicatedPartner = [...partner,...partner]
  return (
    <div className='mt-20 relative overflow-hidden bg-black py-12 ' >
    
    <div className=' w-max flex animate-marquee whitespace-nowrap overflow-x-hidden overflow-y-hidden ' >
        {
            duplicatedPartner.map((partner,index)=>(
        <img   className=' h-12 mx-6 min-w-[120px] opacity-50 object-contain hover:scale-110 transition-transform duration-200 hover:opacity-100 ' key={index} src={partner.image} alt={partner.name}/>
            ))
        }
        {
            duplicatedPartner.map((partner,index)=>(
        <img   className=' h-12 mx-6 min-w-[120px] opacity-50 object-contain hover:scale-110 transition-transform duration-200 hover:opacity-100 ' key={`duplicate -${index}`} src={partner.image} alt={partner.name}/>
            ))
        }
    </div>
    
    </div>
  )
}

export default Partner