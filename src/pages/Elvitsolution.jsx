import React from 'react'
import itbackground from '../assets/images/elvitbackground.jpg'
import ElvITservices from '../components/ElvITservices'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

export default function Elvitsolution() {
  return (
    <div>
        <div style={{ backgroundImage: `url(${itbackground})` }} className="relative bg-cover bg-center min-h-screen "  >
          <Navbar/>
           <div className="absolute inset-0 bg-black/50"></div>
                  <div className='relative z-10 md:max-w-7xl lg:max-w-7xl text-white py-20 md:py-50 space-y-8 px-5 md:px-15 lg:px-25 text-center md:text-left'>
                    <h1 className='text-4xl md:text-6xl font-medium '>Empowering safer, more connected buildings through intelligent ELV & IT</h1>
                    <p className=' md:w-130 text-xl'>Engineered to unify your building’s security, communication, and IT systems for seamless performance, simplified management, and a future-ready experience</p>
                    </div>
                </div>
                <ElvITservices/>
                <Footer/>
    </div>
  )
}
