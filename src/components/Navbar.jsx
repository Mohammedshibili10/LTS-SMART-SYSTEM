import React from 'react'
import logo from '../assets/images/logo.svg'

export default function Navbar() {
  return (
    <div>
         <div className='relative  w-full h-25  z-[9999] bg-[#111111] '>
            <div className='  px-20'>
            <img className='w-35 h-35 pb-9' src={logo} alt="error" />
             </div>
         </div>


    </div>
  )
}
