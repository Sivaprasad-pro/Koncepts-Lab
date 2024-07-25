"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";


const JOINUS = () => {

  const [inputs, setInputs] = useState({});
  const [message,  setMessage] = useState("");

  const handleInput = (e) => {
setInputs((state) => {return {...state,[e.target.name]:e.target.value}})
  }

  const handlesubmit = (e) => {
      e.preventDefault();
      fetch((process.env.NEXT_PUBLIC_API_URL+'/joinusapi') , {
        method:'POST',
        body: JSON.stringify(inputs)
      })
      .then((res) => res.json())
      .then((res) => {
          setMessage(res.message);
          setInputs({});
      })
  }
  
  return (
    <section
      id="joinus"
      className="grid md:grid-cols-2 my-19 md:my-12 py-24 gap-4 relative scroll-py-3  min-h-screen top-0"
    >
              <div>
                <h1 className="text-white text-5xl top-0 mx-auto underline font-semibold">Join Us</h1>
                <p className="text-white mt-5">Koncepts Lab is a forward-thinking IT company dedicated to transforming ideas into innovative digital solutions. Specializing in custom software development, web and mobile applications, cloud services, and digital marketing, we empower businesses to thrive in the digital era. At Koncepts Lab, we combine technical expertise with creative insights to deliver tailored solutions that meet our clients' unique needs. Our commitment to excellence, continuous learning, and customer satisfaction drives us to exceed expectations and build long-term partnerships. Join us at Koncepts Lab and experience the power of innovation in driving business success.</p>
                </div>
      <div className=" h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div className="z-10">

        <h5 className="text-xl font-bold text-white my-2">
          Let&apos;s Connect
        </h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          {" "}
         We are Providing Internships
        </p>
  
          <form className="flex flex-col" onSubmit={handlesubmit} >
            <div className="mb-6">
              <label
                htmlFor="name"
                className="text-white block mb-2 text-sm font-medium"
              >
              Name
              </label>
              <input
                name="name"
                type="name"
                id="name"
                required
                className="bg-[hsl(230,11%,11%)] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                value={inputs.name??""}
                onChange={handleInput}
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="text-white block mb-2 text-sm font-medium"
              >
                Your email
              </label>
              <input
                name="email"
                type="email"
                value={inputs.email??""}
                id="email"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="jacob@google.com"
                onChange={handleInput}
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="phone"
                className="text-white block text-sm mb-2 font-medium"
              >
                phone
              </label>
              <input
                name="phone"
                value={inputs.phone??""}
                type="text"
                id="phone"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                onChange={handleInput}
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className="text-white block text-sm mb-2 font-medium"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Let's talk about..."
                onChange={handleInput}
                value={inputs.message??""}
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-primary-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
            >
              Submit
            </button>
          </form>
        {message && <p className="text-white">{message}</p>}
      </div>
    </section>
  );
};

export default JOINUS;