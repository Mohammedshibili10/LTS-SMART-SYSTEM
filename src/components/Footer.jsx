import React from 'react'
import logo from '../assets/images/logo.svg'
import linkdn from '../assets/images/linkdnicon.svg'
import instgram from '../assets/images/insticon.svg'
export default function Footer() {
    return (
        <div className='bg-[#111111] text-white  h-[250px] px-5 md:px-15 lg:px-30 pt-10 lg:pt-25 space-y-5 '>
            <div className='w-full md:flex justify-between pt-5 '>
                <div className=''>
                    <img src={logo} alt="error" />
                </div>
                <div>
                    <ul className=' flex gap-5 mt-2 '>
                        <li className='text-sm'>Home</li>
                        <li className='text-sm'>About</li>
                        <li className='text-sm'>Services</li>
                        <li className='text-sm'>Brands</li>
                        <li className='text-sm'>Contact</li>
                    </ul>
                </div>
                <div className='flex gap-5 lg:pt-5'>
                    <img className='w-8 h-8' src={linkdn} alt="error" />
                    <img className='w-7 h-8' src={instgram} alt="error" />
                    <button className='w-35 h-7 bg-white text-black  rounded-lg'>Poland Division</button>
                </div>
            </div>
            <hr className='text-[#76B828] ' />
            <div className='lg:flex justify-between gap-5  lg:pt-2'>
                <div className='flex gap-5'>
                    <h4 className='text-sm text-[#5C5C6F]'>Terms of service</h4>
                    <h4 className='text-sm text-[#5C5C6F]'>Privacy Policy</h4>
                </div>
                <div>
                    <h4 className='text-sm text-[#5C5C6F]'>© 2025 Company Name. All rights reserved.</h4>
                </div>
            </div>



        </div>
    )
}
