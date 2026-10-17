import React from 'react'
import Partner from '../Compoents/Partner'
import TechStack from '../Compoents/Techstack'
import Hero from '../Compoents/Hero'

import Services from '../Compoents/Services'
import About from './About'
import ContactMe from './ContactMe'
const Home = () => {
  return (
    <>
     <Hero/>
    <Partner/>

<About/>
<ContactMe/>
    </>
  )
}

export default Home