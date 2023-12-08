'use client'

import React from 'react'
import Container from '../Container'
// import Image from 'next/image'


function page() {
  return (
    <div className="h-50 font-semibold text-white bg-cover relative bg-center " >

    <h1 className="nav-container py-6 text-3xl bg-[url('/imgs/mainBanner.jpg.jpg')]  object-bottom object-cover">
       <Container>

      home <span className='text-primary-green'>page</span>
       </Container>
       </h1>
    </div>  )
}

export default page