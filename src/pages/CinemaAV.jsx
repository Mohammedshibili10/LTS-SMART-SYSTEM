import React from 'react'
import cinema from '../assets/videos/cinema.mp4'
import Footer from '../components/Footer'
import CinemaAVServices from '../components/CinemaAVServices'
import { Link } from 'react-router-dom'

export default function CinemaAV() {
  return (
   <div>
            <div className='relative min-h-screen overflow-hidden'>
           <video src={cinema} autoPlay muted loop  playsInline className="absolute inset-0  w-full h-full object-cover " />
              <div className="absolute inset-0  bg-black/50"></div>
                     <div className='relative z-10 md:max-w-7xl lg:max-w-7xl text-white pt-70 space-y-8 px-5 md:px-15 lg:px-25'>
                     <Link to={'/itsolution'}>  <h1 className='text-5xl md:text-7xl font-medium '>CINEMA & AV SOLUTIONS</h1></Link> 
                       <p className=' md:w-130 text-xl'>From consultation and design to installation and integration, we deliver tailored audiovisual solutions that combine premium equipment, seamless control, and an immersive experience for any space.</p>
                       </div>
                   </div>
                   <CinemaAVServices/>
                   <Footer/>
       </div>
  )
}
