import React from 'react'
import home from '../assets/videos/home.mp4'
import Footer from '../components/Footer'
import ElvhomeServices from '../components/ElvhomeServices'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'

export default function ElvHome() {
  return (
    <div >
    
      <div className='relative  min-h-screen overflow-hidden'>
         <Navbar/> 
        <video src={home} autoPlay muted loop  playsInline className="absolute  inset-0 w-full h-full object-cover" alt='error' />
         <div className="absolute inset-0 bg-black/50"></div>
          <div className='relative z-10 md:max-w-7xl lg:max-w-7xl text-white pt-20 md:pt-70 space-y-8 px-5 md:px-15 lg:px-25'>
           <Link to={'/cinema'}> <h1 className='text-5xl md:text-7xl font-medium '>HOME & BUILDING AUTOMATION SOLUTIONS</h1></Link>
          <p className=' md:w-130 text-xl'>Our expert team designs and integrates systems to deliver seamless, reliable, and effortless experiences across residential and commercial spaces.</p>
            </div>
       
        </div>
        <ElvhomeServices/>
        <Footer/>
    </div>
  )
}
