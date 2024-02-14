"use client";

import React from "react";
import Container from "../Container";
import { BsWhatsapp } from "react-icons/bs";

function page() {
  const phoneNumber = "03145366433";

  const handleClick = () => {
    const whatsappURL = `https://wa.me/${phoneNumber}`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <div className="max-w-screen-2xl  mx-auto">
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

      <div className="bg-primary-green">
        <Container>
          <div className="nav-container px-2 py-6 lg:py-0 grid grid-cols-5 justify-end">
            <div className="py-0 lg:py-4 col-span-5 lg:col-span-3">
              <h1 className="pt-0 lg:pt-2 pr-0 lg:pr-4 text-[16px] md:text-[18px] font-bold text-white text-center">
                FEEL FREE TO CONTACT US ANYTIME FOR YOUR ALL QUERIES AND EXPERT
                ADVICE!
              </h1>
            </div>
            <div className="whatsapp-button w-full flex place-content-center col-span-5 lg:col-span-2">
              <div className="mt-4 lg:mt-0 py-0 lg:py-4 w-[220px] md:w-[240px] lg:w-full bg-primary-halfWhite">
                <button
                  className="w-full flex place-content-center hover:bg-halfWhite py-4 gap-2 text-white"
                  onClick={handleClick}
                >
                  <BsWhatsapp className="text-primary-green h-5 w-5 lg:h-10 lg:w-10" />
                  <h2 className="pt-[1px] lg:pt-1 text-[12px] lg:text-lg text-primary-green font-bold">
                    GET FREE CONSULTATION
                  </h2>
                </button>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default page;
