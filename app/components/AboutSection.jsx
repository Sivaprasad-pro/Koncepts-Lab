"use client"
import React ,{useTransition, useState} from 'react'
import Image from 'next/image'

import { useRef } from 'react';
import { ArrowLeftCircleIcon } from '@heroicons/react/20/solid';
import { ArrowRightCircleIcon } from '@heroicons/react/20/solid';


const AboutSection = () => {

    const scrollContainerRef = useRef(null);
  
    const handleWheel = (evt) => {
      evt.preventDefault();
      scrollContainerRef.current.scrollLeft += evt.deltaY;
    };
  
    const handleNextClick = () => {
      if (scrollContainerRef.current) {
        scrollContainerRef.current.style.scrollBehavior = 'smooth';
        scrollContainerRef.current.scrollLeft += 300;
      }
    };
  
    const handleBackClick = () => {
      if (scrollContainerRef.current) {
        scrollContainerRef.current.style.scrollBehavior = 'smooth';
        scrollContainerRef.current.scrollLeft -= 300;
      }
    };
  
    

  

  return( <section>
    <h1 className=' text-4xl font-semibold text-white mb-5 ml-0 mr-0 underline underline-offset-4 '>Life At Koncepts Lab</h1>
    <div className='flex flex-row mb-20'>
     <ArrowLeftCircleIcon id="backbtn"  onClick={handleBackClick} className='text-white w-40'/>
      <div className='w-900 flex overflow-x-hidden mb-5 ml-2 mr-6' ref={scrollContainerRef} onWheel={handleWheel}>
         <div className='flex flex-row gap-10 p-10'>
         <Image className=" filter grayscale transition-transform duration-500 hover:filter-none hover:scale-110" src="/images/32.png" width={300} height={300}/>
         <Image className="filter grayscale transition-transform duration-500 hover:filter-none hover:scale-110" src="/images/27.png" width={300} height={300}/>
          <Image  className=" filter grayscale transition-transform duration-500 hover:filter-none hover:scale-110" src="/images/28.png" width={300} height={300}/>
           <Image className=" filter grayscale transition-transform duration-500 hover:filter-none hover:scale-110" src="/images/20.png" width={300} height={300}/>
      </div>

    </div>
   
    <ArrowRightCircleIcon id="nextbtn"  onClick={handleNextClick} className='text-white w-40'/>
    </div>
    </section>
  )
}

export default AboutSection
