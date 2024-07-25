"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";


const Register = () => {

  const [inputs, setInputs] = useState({});
  const [message,  setMessage] = useState("");

  const handleInput = (e) => {
setInputs((state) => {return {...state,[e.target.name]:e.target.value}})
  }

  const handlesubmit = (e) => {
      e.preventDefault();
      fetch((process.env.NEXT_PUBLIC_API_URL+'/registerapi') , {
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
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative bg-black"
    >
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div className="z-10">
        <h5 className="text-xl font-bold text-white my-2">
          Let&apos;s Connect
        </h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          {" "}
         Register For future Projects
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
                htmlFor="budget"
                className="text-white block text-sm mb-2 font-medium"
              >
                Budgets
              </label>
              <input
                name="budget"
                value={inputs.budget??""}
                type="text"
                id="budget"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                onChange={handleInput}
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="servicetype"
                className="text-white block text-sm mb-2 font-medium"
              >
                Service Type
              </label>
              <input
                name="servicetype"
                value={inputs.servicetype??""}
                type="text"
                id="servicetype"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                onChange={handleInput}
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="timeline"
                className="text-white block text-sm mb-2 font-medium"
              >
                timeline
              </label>
              <input
                name="timeline"
                value={inputs.timeline??""}
                type="text"
                id="timeline"
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

export default Register;