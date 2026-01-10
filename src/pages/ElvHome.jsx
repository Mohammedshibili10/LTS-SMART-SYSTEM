import React from 'react'
import background from '../assets/images/ELVBACKGROUND.png'
import Services from '../components/ElvhomeServices'
import Footer from '../components/Footer'
import ElvhomeServices from '../components/ElvhomeServices'

export default function ElvHome() {
  return (
    <div  >
        <div style={{ backgroundImage: `url(${background})` }} className="relative bg-cover bg-center min-h-screen"  >
         <div className="absolute inset-0 bg-black/50"></div>
          <div className='relative z-10 md:max-w-7xl lg:max-w-7xl text-white pt-50 space-y-8 px-5 md:px-15 lg:px-25'>
            <h1 className='text-5xl md:text-7xl font-medium '>HOME & BUILDING AUTOMATION SOLUTIONS</h1>
            <p className=' md:w-130 text-xl'>Our expert team designs and integrates systems to deliver seamless, reliable, and effortless experiences across residential and commercial spaces.</p>
            </div>
        </div>
        <ElvhomeServices/>
        <Footer/>
    </div>
  )
}
