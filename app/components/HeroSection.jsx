"use client"
import React from 'react'
import Image from "next/image";
import { TypeAnimation } from 'react-type-animation';


const HeroSection = () => {
  return (
  <section >
    <div className='flex flex-row'>
        <div className='col-span-7 place-self-center text-center sm:text-left'>
         <h1 className=' w-50 text-white mb-4 text-4xl mt-7 sm:text-2xl lg:text-5xl lg:leading-normal font-extrabold'>
         <span className='text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-600'> Koncepts Lab</span>
       <br></br>
      <TypeAnimation className='text-4xl'
              sequence={[
                "We Create Expectional Digital Experiences",
                1000,
                " We Create Expectional Digital Experiences",
                1000,
                "We Create Expectional Digital Experiences",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
         </h1>
      
      
        </div>
        <div>
        <Image className="w-full top-0 right-0 ml-12" src="/images/download.png" width={200} height={200} />  </div>      
       

    
    </div>
 </section>
  )
}

export default HeroSection;
