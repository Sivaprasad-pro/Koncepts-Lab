import React from 'react'
import Image from 'next/image'
import { EyeIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'


const Klass = () => {
  return (
   
    <div className='mx-auto' >
      <h1 className='text-white text-4xl ml-2 mb-10  underline '>Klass-Training Hub </h1>
      <h5 className="text-3xl font-bold mb-2 ml-3 text-[#08f808f1]">Kodifine </h5>
    <div
      className="h-75 md:h-72 rounded-t-xl relative group flex flex-row gap-4 bg-white rounded-2xl md:w-auto"
     >
       <Image className='ml-3 w-17 bg-opacity-0 hover:bg-opacity-7 mr-7' src="/images/kodifine.png" width={287} height={300} />
      
       <p className="text-black font-semibold text-lg mt-3.5  "> Embark on a transformative learning journey with Kodifine, your premier destination for mastering AWS full stack development. At Kodifine, we're dedicated to equipping aspiring professionals with cutting-edge skills and industry-relevant knowledge. Whether you're starting your career or seeking to advance in the tech industry, our comprehensive curriculum and hands-on approach ensure you're ready to excel in AWS cloud computing, front-end and back-end development, database management, and beyond.
              </p>
      
      <div className="  overlay items-center justify-center absolute top-0 left-0 w-1/3 h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-colors duration-500 ">
    
        <Link
          href="https://www.google.com/url?sa=i&url=https%3A%2F%2Fkodifine.com%2F&psig=AOvVaw1ZZTLXkq010rw3tqXYJMD8&ust=1721884684445000&source=images&cd=vfe&opi=89978449&ved=0CAYQrpoMahcKEwjArti79r6HAxUAAAAAHQAAAAAQBA"
          className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group"
        >
          <EyeIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover:text-white" />
        </Link>
       </div>
    </div>
    <div className="text-white rounded-b-xl mt-3 bg-[#181818]py-6 px-4">

     
    </div>
  </div>

  )
}

export default Klass
