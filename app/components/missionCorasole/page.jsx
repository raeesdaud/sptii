'use client'
import React from 'react'

import { Navigation, Pagination, Scrollbar, A11y, Autoplay    } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';




function page() {
  return (
    <div className='img-container my-4 '>
       
    <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay   ]}
        spaceBetween={20}
        slidesPerView={1}
        // navigation
        effect="fade"
        fadeEffect={{
          crossFade:true
        }}
        autoplay={{ 
            delay: 3000, 
            disableOnInteraction: false, 
          }}
        pagination={{ clickable: true }}
        // scrollbar={{ draggable: true }}
       
    >

        <SwiperSlide>
            <div className='mb-7 max-lg:w-5/6 max-lg: w-4/6 mx-auto h-24'>
          <h1 className='text-xl text-center '>To equip Individuals with the skills and knowledge through comprehensive trainings and support they need to succeed in the workforce and reduce unemployment.</h1>
            </div>
            </SwiperSlide>
        <SwiperSlide>
            <div  className='mb-7 w-4/6 mx-auto h-24 '   >
             <h1 className='text-xl text-center'>To gain a reputation by training, and qualifying professionals and consulting corporate companies through innovation and to grow along with them in creativity.
</h1>
            </div>
           </SwiperSlide>
        <SwiperSlide>
            <div  className='mb-7 w-4/6 mx-auto h-20'  >
            <h1 className='text-xl text-center'>To promote global safety standards across industries and geographies.</h1>
            </div>
            </SwiperSlide>
    </Swiper>

</div> 
  )
}

export default page