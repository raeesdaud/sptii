'use client'


import React from 'react'
import Container from '../components/Container'

import { Navigation, Pagination, Scrollbar, A11y, Autoplay    } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function page() {
  return (
    <Container>
   <h1 className='text-center text-4xl mt-3  font-semibold'>Our Clients</h1>

  
   <div className='img-container my-10 '>
       
       <Swiper
           modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay   ]}
           spaceBetween={20}
           slidesPerView={1}
           navigation
           effect="fade"
           fadeEffect={{
             crossFade:true
           }}
           autoplay={{ 
               delay: 6000, 
               disableOnInteraction: false, 
             }}
           pagination={{ clickable: true }}
           // scrollbar={{ draggable: true }}
          
       >
           <SwiperSlide>
           <div className=' max-md:w-4/5 max-md:mx-auto h-36' >

               <img src='' alt="" className='object-center object-cover' object-cover style={{ width: "100%", height:"100%"}} />
           </div>
           </SwiperSlide>
         
       </Swiper>

   </div>  


    </Container>
    )
}

export default page