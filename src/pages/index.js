import React from 'react'
import Navbar from '@/Components/Navbar';
import Demo from '@/Components/Demo';
import Hero from '@/Components/Hero';
import Service from '@/Components/Services';
import Recent from '@/Components/Recent';
import Contact from '@/Components/ContactUs';
import About from '@/Components/About';
const index = () => {
  return (
    <div className=" bg-gradient-to-tr from-white/45 from-5% via-[#A7F1A7]  to-[#1FC71F]  ">
{/*       
      <Demo/> */}

      <Navbar/>
     
      <Hero/>
      <About/>
      <Service/>
      <Recent/>
      <Contact/>


      
    </div>
  )
}

export default index
