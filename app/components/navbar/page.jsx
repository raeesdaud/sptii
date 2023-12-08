import Image from "next/image";
import React from "react";
import Link from "next/link";
import {  AiOutlineMail } from "react-icons/ai";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";


function page() {
  return (
    <div>
      <div className=" main-div bg-primary-green">
        <div className="flex flex-wrap justify-between max-w-screen-xl mx-auto py-3  px-4 xl:px-0">
          <Image
            className=" rounded-[50%]"
            src="/imgs/SPTI.jpg"
            width={90}
            height={90}
            alt="Picture of the author"
          />
          <div className="social-links flex gap-2 ">
            <div className="whatsapp px-4 flex gap-3 space-y-4 ">
              <div className="logo my-6">
                <FaPhone size={30} className="text-green-500" />
              </div>
              <div>
                <h1 className="font-semibold text-white">Phone</h1>
                <p className=" text-white">0937830842</p>
              </div>
            </div>
            <div className="gmail border-l-2 px-4 flex gap-3 space-y-4 ">
              <div className="logo my-6">
                <AiOutlineMail size={30} className="text-blue-500" />
              </div>
              <div>
                <h1 className="font-semibold text-white">Email</h1>
                <p className=" text-white">info@sptii.com</p>
              </div>
            </div>
            <div className="location border-l-2 px-4 flex gap-3 space-y-4 ">
              <div className="logo my-6">
                <FaLocationDot size={30} className="text-red-500" />
              </div>
              <div>
                <h1 className="font-semibold text-white">Address</h1>
                <p className=" text-white">
                 Office #108 Mehar Arcade G-14/4 Islamabad
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="lower-div bg-primary-green flex justify-between max-w-screen-xl mx-auto py-1 px-4 xl:px-0 ">
          <div className="flex flex-wrap text-center mx-auto gap-3">
            <div className="home bg-white rounded-sm px-2 py-1 font-semibold  text-primary-green ">
              <button >
                <Link   href="/">HOME</Link>
              </button>
            </div>
            <div className="  bg-white rounded-sm px-2 py-1 font-semibold  text-primary-green  ">
              <button>
                <Link href="/aboutUs">ABOUT US</Link>
              </button>
            </div>
            <div className="  bg-white rounded-sm px-2 py-1 font-semibold  text-primary-green  ">
              <button>
                <Link href="/internationalCourses">INTERNATIONAL COURSES</Link>
              </button>
            </div>

            {/* <div className="services relative">
              <div className="home  bg-white rounded-sm px-2 py-1  font-semibold text-lg text-primary-green  ">
                <button className="peer flex-none  "> 
                <div className="flex">
                   <div>

                   SERVICES
                   </div>
                        <div>
                        <TiArrowSortedDown className="my-1"/>
                          </div> 
                        </div>
                </button>

                <div
                  class="hidden absolute z-10 peer-hover:flex hover:flex
         w-[200px]
         flex-col bg-white drop-shadow-lg"
                >
                  <button className="px-2 py-2 font-medium text-primary-green hover:bg-gray-200">
                    {" "}
                    <Link to={"/InternationalCourses"} href="#">
                      Inspections
                    </Link>
                  </button>
                  <button className="px-2 py-2  font-medium text-primary-green hover:bg-gray-200">
                    {" "}
                    <Link to={"/ShortTrainingCourses"} href="#">
                      Audits{" "}
                    </Link>
                  </button>
                  <button className="px-2 py-2  font-medium text-primary-green hover:bg-gray-200">
                    <Link to={"/CorporateServices"} href="#">
                      Investigations
                    </Link>
                  </button>
                  <button className="px-2 py-2  font-medium text-primary-green hover:bg-gray-200">
                    {" "}
                    <Link to={"/CorporateServices"} href="#">
                      Safety Management System{" "}
                    </Link>
                  </button>
                  <button className="px-2 py-2  font-medium text-primary-green hover:bg-gray-200">
                    {" "}
                    <Link to={"/CorporateServices"} href="#">
                      RecEnvironmental Management System{" "}
                    </Link>
                  </button>
                  <button className="px-2 py-2  font-medium text-primary-green hover:bg-gray-200">
                    {" "}
                    <Link to={"/CorporateServices"} href="#">
                      Ruiting Safety Professionals{" "}
                    </Link>
                  </button>
                </div>
              </div>
            </div> */}

            {/* <div className="services relative">
              <div className="home  bg-white rounded-sm px-2 py-1  font-semibold text-lg text-primary-green  ">
                <button className="peer flex  "> 
                <div>COURSES</div>
                <div> <TiArrowSortedDown className="my-1 " /></div>
                </button>

                <div class="hidden absolute z-10 peer-hover:flex hover:flex w-[200px] flex-col bg-white drop-shadow-lg">
                  <div className="International Courses relative">
                    <div className="home  bg-white rounded-sm px-2 py-1  font-semibold text-lg text-primary-green  ">
                      <button className="peer flex-none  ">
                        <div className="flex">
                   <div>

                        International Courses
                   </div>
                        <div>
                        <TiArrowSortedDown className="my-5"/>
                          </div> 
                        </div>
                      </button>

                      <div class="hidden absolute left-48 top-1 z-10 peer-hover:flex hover:flex w-[200px] flex-col bg-white drop-shadow-lg">
                        <button className="px-2 py-2 font-medium text-primary-green hover:bg-gray-200">
                          {" "}
                          <Link to={"/InternationalCourses"} href="#">
                            Nebosh{" "}
                          </Link>
                        </button>
                        <button className="px-2 py-2  font-medium text-primary-green hover:bg-gray-200">
                          {" "}
                          <Link to={"/ShortTrainingCourses"} href="#">
                            IOSH{" "}
                          </Link>
                        </button>
                        <button className="px-2 py-2  font-medium text-primary-green hover:bg-gray-200">
                          <Link to={"/CorporateServices"} href="#">
                            OSHA{" "}
                          </Link>
                        </button>
                        <button className="px-2 py-2  font-medium text-primary-green hover:bg-gray-200">
                          {" "}
                          <Link to={"/CorporateServices"} href="#">
                            AOSH{" "}
                          </Link>
                        </button>
                        <button className="px-2 py-2  font-medium text-primary-green hover:bg-gray-200">
                          {" "}
                          <Link to={"/CorporateServices"} href="#">
                            EOSH{" "}
                          </Link>
                        </button>
                        <button className="px-2 py-2  font-medium text-primary-green hover:bg-gray-200">
                          {" "}
                          <Link to={"/CorporateServices"} href="#">
                            RIG PASS{" "}
                          </Link>
                        </button>
                        <button className="px-2 py-2  font-medium text-primary-green hover:bg-gray-200">
                          {" "}
                          <Link to={"/CorporateServices"} href="#">
                            H2S SAFETY{" "}
                          </Link>
                        </button>
                        <button className="px-2 py-2  font-medium text-primary-green hover:bg-gray-200">
                          {" "}
                          <Link to={"/CorporateServices"} href="#">
                            LEAD ADITOR{" "}
                          </Link>
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="Short Training Courses relative">
                    <div className="home  bg-white rounded-sm px-2 py-1  font-semibold text-lg text-primary-green  ">
                      <button className="peer flex-none  ">
                        <div className="flex">
                   <div>

                   Short Training Courses
                   </div>
                        <div>
                        <TiArrowSortedDown className="my-5"/>
                          </div> 
                        </div>
                      </button>

                      <div
                        class="hidden absolute left-48 top-1 z-10 peer-hover:flex hover:flex
w-[200px]
flex-col bg-white drop-shadow-lg"
                      >
                        <button className="px-2 py-2 font-medium text-primary-green hover:bg-gray-200">
                          {" "}
                          <Link to={"/InternationalCourses"} href="#">
                            Work At Height
                          </Link>
                        </button>
                        <button className="px-2 py-2  font-medium text-primary-green hover:bg-gray-200">
                          {" "}
                          <Link to={"/ShortTrainingCourses"} href="#">
                            Scaffolding{" "}
                          </Link>
                        </button>
                        <button className="px-2 py-2  font-medium text-primary-green hover:bg-gray-200">
                          <Link to={"/CorporateServices"} href="#">
                            Work Permit
                          </Link>
                        </button>
                        <button className="px-2 py-2  font-medium text-primary-green hover:bg-gray-200">
                          {" "}
                          <Link to={"/CorporateServices"} href="#">
                            Emergency Response{" "}
                          </Link>
                        </button>
                        <button className="px-2 py-2  font-medium text-primary-green hover:bg-gray-200">
                          {" "}
                          <Link to={"/CorporateServices"} href="#">
                            Risk Assessment
                          </Link>
                        </button>
                        <button className="px-2 py-2  font-medium text-primary-green hover:bg-gray-200">
                          {" "}
                          <Link to={"/CorporateServices"} href="#">
                            Accident Investigation{" "}
                          </Link>
                        </button>
                        <button className="px-2 py-2  font-medium text-primary-green hover:bg-gray-200">
                          {" "}
                          <Link to={"/CorporateServices"} href="#">
                            Confined Space Entry{" "}
                          </Link>
                        </button>
                        <button className="px-2 py-2  font-medium text-primary-green hover:bg-gray-200">
                          {" "}
                          <Link to={"/CorporateServices"} href="#">
                            H2s Safety
                          </Link>
                        </button>
                        <button className="px-2 py-2  font-medium text-primary-green hover:bg-gray-200">
                          {" "}
                          <Link to={"/CorporateServices"} href="#">
                            Oil Rig Safety
                          </Link>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}

            <div className="   bg-white rounded-sm px-2 py-1  font-semibold  text-primary-green ">
              <button>
                <Link href="#">CORPORATE TRAININGS</Link>
              </button>
            </div>

            <div className="   bg-white rounded-sm px-2 py-1  font-semibold  text-primary-green ">
              <button>
                <Link href="#">Onsite Trainings </Link>
              </button>
            </div>
            <div className="   bg-white rounded-sm px-2 py-1  font-semibold text-primary-green ">
              <button>
                <Link href="#">CONSULTANCY</Link>
              </button>
            </div>
            <div className="   bg-white rounded-sm px-2 py-1  font-semibold  text-primary-green ">
              <button>
                <Link href="#">ALUMNAI</Link>
              </button>
            </div>
            <div className="   bg-white rounded-sm px-2 py-1  font-semibold  text-primary-green ">
              <button>
                <Link href="#">JOBS</Link>
              </button>
            </div>
            <div className="   bg-white rounded-sm px-2 py-1  font-semibold   text-primary-green ">
              <button>
                <Link href="#">VERIFICATION</Link>
              </button>
            </div>
           
            <div className="  bg-white rounded-sm px-2 py-1  font-semibold  text-primary-green ">
              <button>
                <Link href="/contact">CONTACT US</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
