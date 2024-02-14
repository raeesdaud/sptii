"use client";

import React, { useEffect, useState } from "react";
import Container from "../components/Container";

import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

function page() {
  const [imgData, setImgData] = useState([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const response = await fetch(
  //       "http://localhost:1337/api/clients?populate=ClientLogo"
  //     );
  //     const data = await response.json()
  //     // setImgData(data.data.attributes.ClientLogo)
  //     const Data = data.data
  //      const Attributes = Data.attributes
  //      console.log(Attributes)
  //   };
  //   fetchData()
  // }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://localhost:1337/api/clients?populate=ClientLogo"
        );
        const data = await response.json();

        // Check if data is available
        if (data && data.data && data.data.length > 0) {
          const clientData = data.data[0]; // Assuming you want the first item

          if (clientData.attributes && clientData.attributes.ClientLogo) {
            const clientLogoData =
              clientData.attributes.ClientLogo.data[0].attributes;
            console.log(clientLogoData);
            setImgData([clientLogoData]);
          } else {
            console.error("ClientLogo data not available");
          }
        } else {
          console.error("No data available");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <Container>
      <h1 className="text-center text-2xl md:text-4xl mt-3 font-semibold">Our Clients</h1>

      <div className="img-container my-10 ">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          spaceBetween={20}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 5,
            },
          }}
          effect="fade"
          fadeEffect={{
            crossFade: true,
          }}
          autoplay={{
            delay: 6000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          // scrollbar={{ draggable: true }}
        >
          <SwiperSlide>
            <div className=" max-md:w-4/5 max-md:mx-auto h-36">
              {/* {imgData && imgData.map((item)=>(

                <div key={item.id}>
              <img
                src={item.url}
                alt="client img"
                className="object-center object-cover"
                object-cover
                style={{ width: "100%", height: "100%" }}
              />
                </div>

))} */}
              <img
                src="https://www.paksafetysolutions.com/wp-content/uploads/2022/03/BSC.jpg"
                alt=""
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://www.paksafetysolutions.com/wp-content/uploads/2022/03/IOSH.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img
                src="https://www.paksafetysolutions.com/wp-content/uploads/2022/03/BSC.jpg"
                alt=""
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://www.paksafetysolutions.com/wp-content/uploads/2022/03/IOSH.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img
                src="https://www.paksafetysolutions.com/wp-content/uploads/2022/03/BSC.jpg"
                alt=""
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://www.paksafetysolutions.com/wp-content/uploads/2022/03/IOSH.jpg"
              alt=""
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </Container>
  );
}

export default page;
