"use client";

import React from "react";
import { Pagination, Scrollbar, A11y, Autoplay } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

function SliderTestimonial(props) {
  return (
    <div className="w-full flex place-content-center">
      <div className="w-[280px] md:w-[580px] lg:w-[720px] xl:w-[1020px] max-w-screen-xl my-8">
        <div className="text-sm lg:text-[16pax]">
          <Swiper
            className="flex"
            modules={[Pagination, Scrollbar, A11y, Autoplay]}
            spaceBetween={20}
            effect="fade"
            fadeEffect={{
              crossFade: true,
            }}
            autoplay={{
              delay: 6000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 1,
              },
              1366: {
                slidesPerView: 2,
              },
            }}
            pagination={{ clickable: true }}
          >
            <SwiperSlide>
              <div className="flex flex-col">
                <div className="bg-green-100 p-8 md:p-12">
                  <p>
                    Lorem1 ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptatum esse officiis eum odit consectetur, labore
                    dolorum minus nisi optio, laboriosam ex architecto quasi
                    porro unde velit pariatur in. Reiciendis, harum.
                  </p>
                </div>
                <div className="pt-3 pl-5 flex">
                  <p className="text-primary-green">Unknown</p>
                  <p>&nbsp; / QHSE Lead, INTECH Process automation</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex flex-col">
                <div className="bg-green-100 p-8 md:p-12">
                  <p>
                    Lorem2 ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptatum esse officiis eum odit consectetur, labore
                    dolorum minus nisi optio, laboriosam ex architecto quasi
                    porro unde velit pariatur in. Reiciendis, harum.
                  </p>
                </div>
                <div className="pt-3 pl-5 flex">
                  <p className="text-primary-green">Unknown</p>
                  <p>&nbsp; / QHSE Lead, INTECH Process automation</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex flex-col">
                <div className="bg-green-100 p-8 md:p-12">
                  <p>
                    Lorem3 ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptatum esse officiis eum odit consectetur, labore
                    dolorum minus nisi optio, laboriosam ex architecto quasi
                    porro unde velit pariatur in. Reiciendis, harum.
                  </p>
                </div>
                <div className="pt-3 pl-5 flex">
                  <p className="text-primary-green">Unknown</p>
                  <p>&nbsp; / QHSE Lead, INTECH Process automation</p>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default SliderTestimonial;
