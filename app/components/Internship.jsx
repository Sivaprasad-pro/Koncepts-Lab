"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";


const Internship = () => {

  const [inputs, setInputs] = useState({});
  const [message,  setMessage] = useState("");
  const [file, setFile] = useState();

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

const handleFile= (e) => {
    e.preventDefault();
    setFile(e.target.files[0])
}
// function handleUpload() {
//   const formData = new FormData()
//   formData.append('file',file)
// }
  
  return (
    <section
      id="internship"
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative min-h-screen top-0"
    >
             <div>
              <h1 className="text-white text-5xl top-0 font-semibold underline mb-4">Join Our Internship</h1>
          

              <p className="ml-5 items-center  text-gray-300">Are you ready to ignite your career with hands-on experience and real-world challenges? Kodifine invites passionate individuals to join our dynamic internship program. As a leading innovator in [your industry or field], Kodifine is committed to nurturing talent and fostering creativity.</p>

  

            
              </div>
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div className="z-10">
        <h5 className="text-xl font-bold text-white my-2">
          Let&apos;s Connect
        </h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          {" "}
         Register For Internships
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
                htmlFor="qualification"
                className="text-white block text-sm mb-2 font-medium"
              >
                qualification
              </label>
              <input
                name="qualification"
                value={inputs.qualification??""}
                type="text"
                id="qualification"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                onChange={handleInput}
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="cvupload"
                className="text-white block text-sm mb-2 font-medium"
              >
             Upload CV
              </label>
              <input
                name="cvupload"
                // value={inputs.cvupload??""}
                type="file"
                id="cvupload"
                required
                className=" bg-gray-400 text-gray-100 "
                onChange={(e) => {
                  setFile(e.target.files?.[0]);}
                }
                onSubmit={handleFile}
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

export default Internship;