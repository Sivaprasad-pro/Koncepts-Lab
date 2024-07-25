"use client";
import Link from 'next/link'
import React   from 'react'
import Image from 'next/image';



const Navbar = () => {

  return (
   <nav className="fixed py-0 top-0 left-0 right-0  z-1 bg-[#121212] mx-auto bg-opacity-85">
        <div className='flex flex-wrap items-center  justify-between mx-auto px-4 py-0'>
         <Link  href={"/"}>
            <Image className=' ml-2 mt-0 mb-0 rounded' src="/images/download.png" alt='Logo' width={120} height={120}/>
            </Link>

        <div>
            <nav className='gap-4 space-x-3'>
            <Link className='text-white' href="#joinus">Join Us</Link>
            <Link className='text-white' href="#register">Register For Projects</Link>
            <Link className='text-white' href="#internship">Join Our Internship</Link>

            </nav>
        </div>  

       </div>
   </nav>
  )
}

export default Navbar
