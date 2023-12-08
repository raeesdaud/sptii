'use client'

import React from 'react'
import { Navigation, Pagination, Scrollbar, A11y, Autoplay    } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function Slider(props) {
    return (
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
            <div className=' max-md:w-4/5 max-md:mx-auto max-md:h-96' style={{height:"30rem"}}>

                <img src={props.img1} alt="" className='object-center object-cover' object-cover style={{ width: "100%", height:"100%"}} />
            </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='max-md:w-4/5 max-md:mx-auto'  style={{height:"30rem"}}>

                <img src={props.img2} alt="" className=' object-center object-cover' style={{ width: "100%", height:"100%" }} />
                </div>
                </SwiperSlide>
            <SwiperSlide>
                <div className='max-md:w-4/5 max-md:mx-auto' style={{height:"30rem"}}>
                <img src={props.img4}  alt="" className='object-center object-cover' style={{ width: "100%", height:"100%" }} />
                </div>
               </SwiperSlide>
            <SwiperSlide>
                <div className='max-md:w-4/5 max-md:mx-auto'  style={{height:"30rem"}}>

                <img src={props.img4}  alt="" className='object-center object-cover' style={{ width: "100%", height:"100%" }} />
                
                </div>
                </SwiperSlide>
        </Swiper>

    </div>  
    )
}

export default Slider