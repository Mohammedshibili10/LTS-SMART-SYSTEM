import React from 'react'
import { servicesData } from '../assets/Data'

export default function  ElvhomeServices () {
  return (
    <div className="bg-[#F5FFE4] ">
      {servicesData.map((item, index) => {
        const reverse = index % 2 !== 0
        const isLeft = index % 2 === 0

        return (
          <div key={index} className="px-8 sm:px-12  lg:px-20">
            <div
              className={`lg:flex  gap-10 lg:py-10 w-full ${
                reverse ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* IMAGE WRAPPER */}
              <div className="lg:w-1/2 flex justify-center sm:block relative lg:left-1 px-5 py-5 sm:py-0">
                
                {/* BACK SHADOW / GRADIENT */}
                <div
                  className={`absolute ${
                    isLeft
                      ? 'top-8 sm:top-0 -left-0 lg:-left-3 bg-gradient-to-b from-[#76B8289E]  bg-gradient-to-r from-[#76B8289E]  mask-b-from-20% mask-b-to-80% '
                      : 'top-8 sm:top-0 -right-0 lg:-right-1 bg-gradient-to-b from-[#76B8289E] bg-gradient-to-l from-[#76B8289E] mask-b-from-20% mask-b-to-80%  '
                  }
                  w-60 md:w-80 h-60 md:h-100
                  rounded-xl
                  bg-gradient-to-b from-[#76B8289E]
                 
                `}
                ></div>

                {/* IMAGE – NOT TOUCHED */}
                <img
                  className="relative sm:top-5 w-120 sm:w-170 md:w-195 lg:w-200 h-100 md:h-130 lg:h-170 mt-7 pt-4 sm:pt-0"
                  src={item.image}
                  alt="error"
                />
              </div>

              {/* TEXT SECTION */}
              <div className="relative lg:w-1/2 lg:left-10 space-y-5 pt-9">
                <h1 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold">
                  {item.title}
                </h1>

                <p className="text-lg md:text-xl lg:w-100">
                  {item.description}
                </p>

                <ul className="space-y-10">
                  {item.points.map((point, i) => (
                    <li key={i} className="flex items-center gap-4">
                      <img className="w-6 h-6" src={point.icon} alt="error" />
                      <span className="text-md md:text-xl font-semibold">
                        {point.text}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
