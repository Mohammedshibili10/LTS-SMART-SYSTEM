import React from 'react'
import itbackground from '../assets/images/elvitbackground.jpg'
import Footer from '../components/Footer'
import CinemaAVServices from '../components/CinemaAVServices'
export default function CinemaAV() {
  return (
   <div>
           <div style={{ backgroundImage: `url(${itbackground})` }} className="relative bg-cover bg-center min-h-screen "  >
              <div className="absolute inset-0 bg-black/50"></div>
                     <div className='relative z-10 md:max-w-7xl lg:max-w-7xl text-white pt-70 space-y-8 px-5 md:px-15 lg:px-25'>
                       <h1 className='text-5xl md:text-7xl font-medium '>CINEMA & AV SOLUTIONS</h1>
                       <p className=' md:w-130 text-xl'>From consultation and design to installation and integration, we deliver tailored audiovisual solutions that combine premium equipment, seamless control, and an immersive experience for any space.</p>
                       </div>
                   </div>
                   <CinemaAVServices/>
                   <Footer/>
       </div>
  )
}
