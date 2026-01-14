import React from 'react'
import {servicesData} from '../assets/Data'

export default function ElvhomeServices() {



    return (
        <div className='bg-[#F5FFE4] lg:pt-15' >
            {servicesData.map((item, index) => {
                const reverse = index % 2 !== 0
                  const isLeft = index % 2 == 0


                return (
                    <div key={index} className={`lg:flex items-center  gap-5 xl:gap-10  px-5 md:px-15 xl:px-24 py-10 xl:py-20  ${reverse ? "lg:flex-row-reverse" : ""}`} >
                        <div className='flex-1  relative  px-5 sm:px-8'>
                             <div className={`${isLeft ? 'absolute ml-4 md:ml-7  w-50 md:w-80 h-50 md:h-100 rounded-xl bg-gradient-to-b from-[#76B8289E]  -left-0 bg-gradient-to-b from-[#76B8289E]  bg-gradient-to-r from-[#76B8289E]  mask-b-from-20% mask-b-to-80%' : 'absolute   md:ml-5  w-50 md:w-80 h-50 md:h-80 rounded-xl bg-gradient-to-b from-[#76B8289E] -right-1 bg-gradient-to-b from-[#76B8289E] bg-gradient-to-l from-[#76B8289E] mask-b-from-20% mask-b-to-80% '}`}></div>
                            <img className='relative left-3 md:left-5 top-3 md:top-5 sm:w-85  md:w-180 lg:w-190 lg:h-130 mr-1  ' src={item.image} alt="error" />
                       </div>

                        <div className='  space-y-8 mt-12  flex-1 px-5 md:px-15 lg:px-0 '>
                            <h1 className='text-3xl md:text-4xl lg:text-5xl font-semibold'>{item.title}</h1>
                            <p className='text-lg md:text-xl lg:w-130 '>{item.description}</p>
                            <ul className='space-y-5 max-w-xl'>
                                {item.points.map((point, i) => {
                                    return (
                                        <li key={i} className='flex items-center gap-4 '>
                                            <img className='w-6 h-6' src={point.icon} alt="error" />
                                            <span className='text-md md:text-xl font-semibold'>{point.text}</span>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>

                    </div>
                );
            })}
        </div>
    );
}
