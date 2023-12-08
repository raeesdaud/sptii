import Image from 'next/image'
import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";



function page() {
  return (
    <div className='bg-primary-green  '>
    <div className='flex flex-wrap justify-evenly max-w-screen-xl mx-auto py-7 px-4 xl:px-0 '>

      <div>
        <Image
        className='rounded-[50%] py-2'
         src='/imgs/SPTI.jpg'
         width={100}
         height={100}
        />
        <h1 className='font-semibold text-white '>FOLLOW US ON:</h1>
        <div className='flex gap-2 py-2'>
        <FaFacebook size={30} className='text-white' />
        <FaSquareXTwitter size={30} className='text-white'  />
        <FaLinkedin size={30} className='text-white'  />

        </div>
      </div>
 
      <div className='flex flex-col space-y-2'>
        <h1 className='font-bold text-2xl text-white'>Site Links</h1>
        <h2 className='text-lg text-white '>Home</h2>
        <h2 className='text-lg text-white ' >Services</h2>
        <h2 className='text-lg text-white ' >Career</h2>
        <h2 className='text-lg text-white ' >Jobs</h2>
        <h2 className='text-lg text-white ' >Verification</h2>
        <h2 className='text-lg text-white ' >About US</h2>
        <h2 className='text-lg text-white ' >Contact US</h2>
      </div>

      <div>
        <h1 className='font-bold text-2xl text-white'>Contact Details</h1>
        <div  className='my-3'>
        <h1 className='text-lg font-semibold text-white'>Address:</h1>
         <h2 className='text-white'>Office #108 Mehar Arcade G-14/4 Islamabad</h2>
        </div>

        <div className='text-white'>
          <h1 className='font-semibold'>Phone No:</h1>
          <h2>0937830842</h2>
          
        </div>
      </div>

    </div>
    </div>
  )
}

export default page