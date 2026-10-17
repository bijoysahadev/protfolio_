import React from 'react'
import Partner from '../Components/Partner'
import TechStack from '../Components/Techstack'
import Hero from '../Components/Hero'

import Services from '../Components/Services'
import About from './About'
import ContactMe from './ContactMe'
import Service from './Service'
const Home = () => {
  return (
    <>
     <Hero/>
    <Partner/>

<About/>
<ContactMe/>
<Service/>
    </>
  )
}

export default Home