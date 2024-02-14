import Image from "next/image";
import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

function page() {
  return (
    <div className="max-w-screen-2xl mx-auto">
      <div className="px-8 md:px-20 xl:px-40 py-16 w-full bg-primary-green text-green-100 text-[14px] md:text-[16px] lg:text-[18px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="">
          <Image
            src="/imgs/SPTI.jpg"
            alt=""
            height="100"
            width="100"
            className="rounded-[50%]"
          />
          <div>
            <p className="py-2 md:py-4 text-white font-bold">FOLLOW US ON:</p>
            <div className="flex space-x-4">
              <FaFacebook size={24} className="text-white" />
              <FaSquareXTwitter size={24} className="text-white" />
              <FaLinkedin size={24} className="text-white" />
            </div>
          </div>
        </div>
        <div className="site-links">
          <h1 className="py-2 text-white text-[18pxx] md:text-[20px] font-bold">
            Site Links
          </h1>
          <div>
            <p>Home</p>
            <p>Services</p>
            <p>Career</p>
            <p>Jobs</p>
            <p>Verification</p>
            <p>About US</p>
            <p>Contact US</p>
          </div>
        </div>
        <div className="contact-details">
          <h1 className="py-2 text-white text-[18pxx] md:text-[20px] font-bold">
            Contact Details
          </h1>
          <div>
            <p>Address:</p>
            <p>Office #108 Mehar Arcade G-14/4 Islamabad</p>
          </div>
          <div className="pt-2">
            <p>Phone No:</p>
            <p>0937830842</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
