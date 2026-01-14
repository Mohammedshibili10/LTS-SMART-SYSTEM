import React from 'react'

export default function Shadow() {
  return (
    <div>

   <div className='absolute    w-80 h-80 rounded-xl bg-gradient-to-b from-[#76B8289E]  bg-gradient-to-r from-[#76B8289E]'></div>

 <img className={` relative ${image ? ` relative  md:left-7 top-3 md:top-6 sm:w-90 md:w-150 lg:w-190 lg:h-130 pt-1 mr-10 ` : 'relative left- md:left-6 top-3 md:top-6 sm:w-90 md:w-160 lg:w-190 lg:h-130 pt-1'}`} src={item.image} alt="error" />

    </div>
  )
}
