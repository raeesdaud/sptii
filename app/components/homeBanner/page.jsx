'use client'

import React from 'react'
import Container from '../Container'
import {BsWhatsapp} from 'react-icons/bs'

function page() {
  
       
    const phoneNumber = '03145366433';

    const handleClick = () => {
      const whatsappURL = `https://wa.me/${phoneNumber}`;
      window.open(whatsappURL, '_blank');
    };

  return (
    <div>
        {/* <div className='bg-primary-green'>
            <Container>
            <div className='my-2 text-xl font-semibold text-primary-halfWhite py-9 '>
                <h1>FEEL FREE TO CONTACT US ANYTIME FOR YOUR ALL QUERIES AND EXPERT ADVICE!</h1>
                <div>
                    <button></button>
                </div>
            </div>
            </Container>
        </div> */}
 
  
 <div className=' bg-primary-green  '>
    <div className='  nav-container flex justify-evenly align-center'>
    <h3 className='my-7 text-lg font-bold text-white'>FEEL FREE TO CONTACT US ANYTIME FOR YOUR ALL QUERIES AND EXPERT ADVICE!</h3>
    <div className='whatsapp-button   '>
        <button className='flex bg-primary-halfWhite hover:bg-halfWhite  py-6 px-10 gap-2 text-white' onClick={handleClick}>
        <BsWhatsapp className='text-primary-green' size={40}/>
        <h2 className='mt-2 text-lg  text-primary-green font-bold'>GET FREE CONSULTATION</h2>
        </button>
    </div>
    </div>
 </div>

    </div>
  )
}

export default page