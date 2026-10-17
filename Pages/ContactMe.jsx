import React, { useState } from 'react'

import { FaLocationDot } from "react-icons/fa6";
import { CiHeadphones } from "react-icons/ci";
import { MdOutlineEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import Container from '../Components/Container';
import Flex from '../Components/Flex';
import toast, { Toaster } from 'react-hot-toast';
const ContactMe = () => {


  // 



  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", "886f1aa0-d685-4531-bb2a-11b45d11cb7c");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();
    setResult(data.success ? "Success!" : "Error");
    if (data.success) {
      toast.success("Your Message Is Sent!")
    }
  };


  // 
  return (
    <section className='bg-[#F7F5F0] py-12' >
      <Container>
        {/* flex flex-col lg:flex-row items-stretch justify-between gap-6 */}
        <h1 className={`text-center font-bold text-[56px] mx-auto text-black  `} >Contact ME</h1>
        <Flex className={` flex flex-col lg:flex-row items-stretch justify-between gap-6  `} >
          <div className='  !w-full md:w-[40%] bg-white  p-6 flex flex-col items-start justify-center gap-3 '>
            <div className={`flex flex-col items-start justify-center gap-3  `} >
              <div><FaLocationDot className={`text-[36px] text-black`} /></div>
              <h3 className={`text-black text-[20px] font-semibold  leading-0.5 `} >Location :</h3>
              <p className={`text-[15px]  font-medium text-[#6B7280] `} >Uttara,Dhakha,Bangladesh</p>
            </div>
            {/*  */}

            <div className={`flex flex-col items-start justify-center gap-3  `} >
              <div><CiHeadphones className={`text-[36px] text-black `} /></div>
              <h3 className={`text-black text-[20px] font-semibold  leading-0.5 `} >Contact Number:</h3>
              <p className={`text-[15px]  font-medium text-[#6B7280] `} >01940611690</p>
            </div>


            {/*  */}
            {/*  */}


            <div className={`flex flex-col items-start justify-center gap-3  `} >
              <div><MdOutlineEmail className={`text-[36px] text-black `} /></div>
              <h3 className={`text-black text-[20px] font-semibold  leading-0.5 `} >EMAIL:</h3>
              <p className={`text-[15px]  font-medium text-[#6B7280] `} >bijoysahamernstackdev@gmail.com</p>
            </div>


            {/*  */}
            {/* social links */}
            {/* social links */}
            <div className='mt-3 pt-4 flex flex-col items-start justify-center'>
              <h3 className='text-black text-[20px] font-semibold mb-3'>SOCIALS</h3>
              <div className='flex items-center justify-start gap-4'>
                <div className='w-11 h-11 bg-white flex items-center justify-center border border-gray-200 shadow-sm rounded-md transition-all hover:border-black'>
                  <a href="" className='text-black text-[18px]'><FaGithub /></a>
                </div>
                <div className='w-11 h-11 bg-white flex items-center justify-center border border-gray-200 shadow-sm rounded-md transition-all hover:border-black'>
                  <a href="" className='text-black text-[18px]'><FaFacebook /></a>
                </div>
                <div className='w-11 h-11 bg-white flex items-center justify-center border border-gray-200 shadow-sm rounded-md transition-all hover:border-black'>
                  <a href="" className='text-black text-[18px]'><FaLinkedin /></a>
                </div>
                <div className='w-11 h-11 bg-white flex items-center justify-center border border-gray-200 shadow-sm rounded-md transition-all hover:border-black'>
                  <a href="" className='text-black text-[18px]'><FaWhatsapp /></a>
                </div>
              </div>
            </div>
            {/* social links */}
            {/* social links */}
          </div>
          <div className='  bg-white  !w-full md:w-[60%] p-5 '>
            <form onSubmit={onSubmit} className='flex flex-col gap-6' >
              {/* name */}
              <div className='flex ' >

                <label className='block w-1/2 text-xs font-bold uppercase tracking-wider text-black w-1/2 ' htmlFor="name">Name
                  <input required name="name" className='block mt-2 px-4 py-3.5 w-full bg-white border border-gray-300 rounded-lg text-sm text-black placeholder:text-gray-400 focus:outline-none focus:border-black transition-all ' type="text" id="name" placeholder='Enter Your Name Please' />
                </label>
                {/* name */}
                {/* mail */}
                <label className='ml-3 block w-1/2 text-xs font-bold uppercase tracking-wider text-black ' htmlFor="email">Email Address
                  <input required className='block mt-2 px-4 py-3.5 w-full bg-white border border-gray-300 rounded-lg text-sm text-black placeholder:text-gray-400 focus:outline-none focus:border-black transition-all' type="email" name="email" id="email" placeholder='bijoysaha144@gmail.com' />
                </label>
              </div>
              {/* name */}
              {/* mail */}
              {/* subject */}
              <div className='flex' >
                <label className='block w-full text-xs font-bold uppercase tracking-wider text-black' htmlFor="subject">Subject
                  <input required name='subject' className='block mt-2 px-4 py-3.5 w-full bg-white border border-gray-300 rounded-lg text-sm text-black placeholder:text-gray-400 focus:outline-none focus:border-black transition-all ' type="text" placeholder='Subject' />
                </label>
              </div>
              {/* subject */}
              {/* Message */}
              <div>
                <label className='block w-full text-xs font-bold uppercase tracking-wider text-black' htmlFor="message">Your Message
                  <textarea rows="5" name="message" id="message" className='block mt-2 p-4 w-full bg-white border border-gray-300 rounded-lg text-sm text-black placeholder:text-gray-400 focus:outline-none focus:border-black transition-all resize-none' ></textarea>
                </label>
              </div>
              {/* message */}
              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  className='bg-black text-white px-7 py-3.5 rounded-lg font-medium text-sm flex items-center gap-2 hover:bg-gray-800 transition-all cursor-pointer'
                >
                  Send Me Message <MdOutlineEmail className='text-lg' />
                </button>
              </div>
            </form>
          </div>
        </Flex>
      </Container>
      <Toaster />
    </section>
  )
}

export default ContactMe