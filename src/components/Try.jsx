// import React from 'react'
// import {servicesData} from '../assets/Data'

// export default function Try() {



//     return (
//         <div className='bg-[#F5FFE4] lg:pt-15' >
//             {servicesData.map((item, index) => {
//                 const reverse = index % 2 !== 0
//                   const isLeft = index % 2 == 0


//                 return (
//                 <div className='px-8 sm:px-12   lg:px-10'>
//                     <div key={index} className={`lg:flex  gap-5  lg:py-10 w-80%  ${reverse ? "lg:flex-row-reverse" : ""}`} >
//                         <div className=' flex justify-center sm:block relative lg:left-15 px-5 py-5 sm:py-0 '>
//                              <div className={`absolute${isLeft ? ' top-10 sm:top-0 w-50   md:w-70 h-50 md:h-100 rounded-xl bg-gradient-to-b from-[#76B8289E] -left-0.5  lg:-left-6 bg-gradient-to-b from-[#76B8289E]  bg-gradient-to-r from-[#76B8289E]  mask-b-from-20% mask-b-to-80%' : ' w-50 md:w-80 h-50 md:h-100  rounded-xl bg-gradient-to-b from-[#76B8289E] -right-0 mt-5 sm:mt-0 lg:mr-15 bg-gradient-to-b from-[#76B8289E] bg-gradient-to-l from-[#76B8289E] mask-b-from-20% mask-b-to-80% '}`}></div>
//                             <img className='relative  sm:top-5   w-110 sm:w-170 md:w-195 lg:w-190 h-100 md:h-120 lg:h-160 mt-7 pt-4 sm:pt-0' src={item.image} alt="error" />
//                        </div>

//                         <div className=' relative   lg:left-10 space-y-5 pt-9  '>
//                             <h1 className='text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold'>{item.title}</h1>
//                             <p className='text-lg md:text-xl lg:w-100   '>{item.description}</p>
//                             <ul className='space-y-5 lg:space-y-5  '>
//                                 {item.points.map((point, i) => {
//                                     return (
//                                         <li key={i} className='flex items-center gap-4 '>
//                                             <img className='w-6 h-6' src={point.icon} alt="error" />
//                                             <span className='text-md md:text-xl font-semibold'>{point.text}</span>
//                                         </li>
//                                     )
//                                 })}
//                             </ul>
//                         </div>

//                   </div>
//                      </div>
//                 );
//             })}
//         </div>
   
//     );
   
// }

// import React from 'react'
// import { servicesData } from '../assets/Data'

// export default function Try() {
//   return (
//     <div className="bg-[#F5FFE4] ">
//       {servicesData.map((item, index) => {
//         const reverse = index % 2 !== 0
//         const isLeft = index % 2 === 0

//         return (
//           <div key={index} className="px-8 sm:px-12  lg:px-20">
//             <div
//               className={`lg:flex  gap-10 lg:py-10 w-full ${
//                 reverse ? 'lg:flex-row-reverse' : ''
//               }`}
//             >
//               {/* IMAGE WRAPPER */}
//               <div className="lg:w-1/2 flex justify-center sm:block relative lg:left-1 px-5 py-5 sm:py-0">
                
//                 {/* BACK SHADOW / GRADIENT */}
//                 <div
//                   className={`absolute ${
//                     isLeft
//                       ? 'top-8 sm:top-0 -left-0 lg:-left-3 bg-gradient-to-b from-[#76B8289E]  bg-gradient-to-r from-[#76B8289E]  mask-b-from-20% mask-b-to-80% '
//                       : 'top-8 sm:top-0 -right-0 lg:-right-1 bg-gradient-to-b from-[#76B8289E] bg-gradient-to-l from-[#76B8289E] mask-b-from-20% mask-b-to-80%  '
//                   }
//                   w-60 md:w-80 h-60 md:h-100
//                   rounded-xl
//                   bg-gradient-to-b from-[#76B8289E]
                 
//                 `}
//                 ></div>

//                 {/* IMAGE – NOT TOUCHED */}
//                 <img
//                   className="relative sm:top-5 w-120 sm:w-170 md:w-195 lg:w-200 h-100 md:h-130 lg:h-170 mt-7 pt-4 sm:pt-0"
//                   src={item.image}
//                   alt="error"
//                 />
//               </div>

//               {/* TEXT SECTION */}
//               <div className="relative lg:w-1/2 lg:left-10 space-y-5 pt-9">
//                 <h1 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold">
//                   {item.title}
//                 </h1>

//                 <p className="text-lg md:text-xl lg:w-100">
//                   {item.description}
//                 </p>

//                 <ul className="space-y-10">
//                   {item.points.map((point, i) => (
//                     <li key={i} className="flex items-center gap-4">
//                       <img className="w-6 h-6" src={point.icon} alt="error" />
//                       <span className="text-md md:text-xl font-semibold">
//                         {point.text}
//                       </span>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             </div>
//           </div>
//         )
//       })}
//     </div>
//   )
// }



// import React from 'react'
// import {servicesData} from '../assets/Data'

// export default function ElvhomeServices() {



//     return (
//         <div className='bg-[#F5FFE4] lg:pt-15' >
//             {servicesData.map((item, index) => {
//                 const reverse = index % 2 !== 0
//                   const isLeft = index % 2 == 0


//                 return (
//                     <div key={index} className={`lg:flex   gap-5 lg:gap-10  px-5 md:px-18 xl:px-24 py-10 xl:py-20  ${reverse ? "lg:flex-row-reverse" : ""}`} >
//                         <div className='flex-1  relative  px-5 sm:px-8'>
//                              <div className={`absolute${isLeft ? ' ml-5 md:ml-8  w-50 md:w-80 h-50 md:h-100 rounded-xl bg-gradient-to-b from-[#76B8289E]  -left-0 bg-gradient-to-b from-[#76B8289E]  bg-gradient-to-r from-[#76B8289E]  mask-b-from-20% mask-b-to-80%' : '       w-50 md:w-80 h-50 md:h-100  rounded-xl bg-gradient-to-b from-[#76B8289E] -right-1 bg-gradient-to-b from-[#76B8289E] bg-gradient-to-l from-[#76B8289E] mask-b-from-20% mask-b-to-80% '}`}></div>
//                             <img className='relative left-3 md:left-5 top-3 md:top-5 sm:w-85  md:w-180 lg:w-200 lg:h-130 mr-1  ' src={item.image} alt="error" />
//                        </div>

//                         <div className='  space-y-8 mt-10   flex-1 md:px-10 lg:px-0  '>
//                             <h1 className='text-3xl md:text-4xl lg:text-5xl font-semibold'>{item.title}</h1>
//                             <p className='text-lg md:text-xl lg:w-130 '>{item.description}</p>
//                             <ul className='space-y-5 max-w-xl'>
//                                 {item.points.map((point, i) => {
//                                     return (
//                                         <li key={i} className='flex items-center gap-4 '>
//                                             <img className='w-6 h-6' src={point.icon} alt="error" />
//                                             <span className='text-md md:text-xl font-semibold'>{point.text}</span>
//                                         </li>
//                                     )
//                                 })}
//                             </ul>
//                         </div>

//                     </div>
//                 );
//             })}
//         </div>
//     );
// }
