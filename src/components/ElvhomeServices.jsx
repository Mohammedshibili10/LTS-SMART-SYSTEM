import React from 'react'
import {servicesData} from '../assets/Data'

export default function ElvhomeServices() {



    return (
        <div className='bg-[#F5FFE4] lg:pt-15' >
            {servicesData.map((item, index) => {
                const reverse = index % 2 !== 0



                return (
                    <div key={index} className={`lg:flex items-center  gap-10 xl:gap-10  px-5 md:px-15 xl:px-24 py-10 xl:py-20  ${reverse ? "lg:flex-row-reverse" : ""}`} >
                        <div className='flex-1'>
                            <img className='w-190 lg:h-130' src={item.image} alt="error" />
                        </div>
                        <div className='  space-y-8 mt-8  flex-1  '>
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
