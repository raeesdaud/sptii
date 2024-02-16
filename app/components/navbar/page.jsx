"use client";
import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";
import { AiOutlineMail } from "react-icons/ai";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { IoIosMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";

function page() {
  // Track the open/closed state of dropdowns
  const [isMenuOpen, setMenuOpen] = useState(false);

  // Toggle the main menu open/closed state
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  // Close all dropdowns in the navbar
  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className="max-w-screen-2xl mx-auto">
      <div className="main-div bg-primary-green py-4">
        <div className="px-0 md:px-20 xl:px-28 text-white">
          {/* Image & Socials */}
          <div className="upper-div hidden md:flex place-content-between">
            <div>
              <Image
                className="h-16 w-16 rounded-[50%]"
                src="/imgs/SPTI.jpg"
                width={100}
                height={100}
                alt="Picture"
              />
            </div>
            <div className="social-links lg:text-[14px] lx:text-[16px] hidden lg:flex place-content-end">
              <div className="whatsapp px-4 flex gap-4 space-y-4">
                <div className="logo my-3">
                  <FaPhone size={24} className="text-green-500" />
                </div>
                <div>
                  <h1 className="font-semibold">Phone</h1>
                  <p>+92-3001565610</p>
                </div>
              </div>
              <div className="gmail border-l-2 px-4 flex gap-4 space-y-4">
                <div className="logo my-3">
                  <AiOutlineMail size={24} className="text-blue-500" />
                </div>
                <div>
                  <h1 className="font-semibold">Email</h1>
                  <p>info@sptii.com</p>
                </div>
              </div>
              <div className="location border-l-2 px-4 flex gap-4 space-y-4">
                <div className="logo my-3">
                  <FaLocationDot size={24} className="text-red-500" />
                </div>
                <div>
                  <h1 className="font-semibold">Address</h1>
                  <p>Office #108 Mehar Arcade G-14/4 Islamabad</p>
                </div>
              </div>
            </div>
          </div>

          {/* Menu for md and larger */}
          <div className="lower-div">
            <div className="pt-4 hidden md:flex flex-row justify-between space-x-1 text-[8px] lg:text-[12px] xl:text-[14px]">
              <div className="home bg-white px-1 lg:px-3 py-1 font-semibold text-primary-green ">
                <button>
                  <Link href="/">HOME</Link>
                </button>
              </div>
              <div className="  bg-white px-1 lg:px-3 py-1 font-semibold  text-primary-green">
                <button>
                  <Link href="/aboutUs">ABOUT US</Link>
                </button>
              </div>
              <div className="  bg-white px-1 lg:px-3 py-1 font-semibold  text-primary-green  ">
                <button>
                  <Link href="/internationalCourses">
                    INTERNATIONAL COURSES
                  </Link>
                </button>
              </div>
              <div className="bg-white px-1 lg:px-3 py-1  font-semibold  text-primary-green ">
                <button>
                  <Link href="#">ALUMNI</Link>
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
              {/* 
            <div className="   bg-white rounded-sm px-2 py-1  font-semibold  text-primary-green ">
              <button>
                <Link href="#">Onsite Trainings </Link>
              </button>
            </div> */}
              <div className="bg-white px-1 lg:px-3 py-1  font-semibold text-primary-green ">
                <button>
                  <Link href="/consultancy">CONSULTANCY</Link>
                </button>
              </div>

              <div className="bg-white px-1 lg:px-3 py-1 font-semibold  text-primary-green ">
                <button>
                  <Link href="/corporateTrainings">CORPORATE TRAININGS</Link>
                </button>
              </div>
              <div className="bg-white px-1 lg:px-3 py-1 font-semibold  text-primary-green ">
                <button>
                  <Link href="#">JOBS</Link>
                </button>
              </div>
              <div className="bg-white px-1 lg:px-3 py-1 font-semibold   text-primary-green ">
                <button>
                  <Link href="#">VERIFICATION</Link>
                </button>
              </div>

              <div className="bg-white px-1 lg:px-3 py-1  font-semibold  text-primary-green ">
                <button>
                  <Link href="/contact">CONTACT US</Link>
                </button>
              </div>
            </div>
          </div>

          {/* Navbar for sm screens */}
          <div className="grid md:hidden">
            <nav
              className={`p-4 h-[80px] flex justify-between items-center relative z-30 ${
                isMenuOpen ? "menu-open" : ""
              }`}
            >
              {/* Logo */}
              <div>
                <Image
                  src="/imgs/SPTI.jpg"
                  height="100"
                  width="100"
                  alt=""
                  className="h-16 w-16 rounded-[50%]"
                />
              </div>
              {/* Menu icon */}
              <div>
                <button
                  className="text-white h-[80%] w-[80%]"
                  onClick={toggleMenu}
                >
                  <IoIosMenu size="36" />
                </button>
              </div>

              {/* Menu content */}
              <div
                className={`xl:hidden w-[100%] fixed top-0 left-0 z-50 navbar-menu transition-transform duration-1000 ${
                  isMenuOpen ? "translate-y-0" : "translate-y-full"
                }`}
              >
                {/* Inside Menu */}
                {isMenuOpen && (
                  <div className="px-8 py-8 min-h-screen w-[100%] bg-gray-800 text-white">
                    {/* Close Menu Button */}
                    <div className="relative top-1 -right-3 w-full flex place-content-end">
                      <button onClick={closeMenu} className="bg-black">
                        <IoClose size={36} />
                      </button>
                    </div>

                    {/* Menu Content */}
                    <div className="mt-8">
                      {/* Home */}
                      <div className="hover:bg-primary-green">
                        <hr className="pt-1" />
                        <Link
                          href="/"
                          onClick={closeMenu}
                          className="text-[12px]"
                        >
                          Home
                        </Link>
                        <hr className="mt-2" />
                      </div>
                      {/* About Us */}
                      <div className="pt-2 hover:bg-primary-green">
                        <div className="flex flex-row justify-between">
                          <Link
                            href="/aboutUs"
                            onClick={closeMenu}
                            className="text-[12px]"
                          >
                            ABOUT US
                          </Link>
                        </div>
                        <hr className="mt-2" />
                      </div>
                      {/* International Courses */}
                      <div className="pt-2 hover:bg-primary-green">
                        <div className="flex flex-row justify-between">
                          <Link
                            href="/internationalCourses"
                            onClick={closeMenu}
                            className="text-[12px]"
                          >
                            INTERNATIONAL COURSES
                          </Link>
                        </div>
                        <hr className="mt-2" />
                      </div>
                      {/* Alumni */}
                      <div className="pt-2 hover:bg-primary-green">
                        <div className="flex flex-row justify-between">
                          <Link
                            href="/"
                            onClick={closeMenu}
                            className="text-[12px]"
                          >
                            ALUMNI
                          </Link>
                        </div>
                        <hr className="mt-2" />
                      </div>
                      {/* Consultancy */}
                      <div className="pt-2 hover:bg-primary-green">
                        <div className="flex flex-row justify-between">
                          <Link
                            href="/"
                            onClick={closeMenu}
                            className="text-[12px]"
                          >
                            CONSULTANCY
                          </Link>
                        </div>
                        <hr className="mt-2" />
                      </div>
                      {/* Corporate Trainings */}
                      <div className="pt-2 hover:bg-primary-green">
                        <div className="flex flex-row justify-between">
                          <Link
                            href="/"
                            onClick={closeMenu}
                            className="text-[12px]"
                          >
                            CORPORATE TRAININGS
                          </Link>
                        </div>
                        <hr className="mt-2" />
                      </div>
                      {/* Jobs */}
                      <div className="pt-2 hover:bg-primary-green">
                        <div className="flex flex-row justify-between">
                          <Link
                            href="/"
                            onClick={closeMenu}
                            className="text-[12px]"
                          >
                            JOBS
                          </Link>
                        </div>
                        <hr className="mt-2" />
                      </div>
                      {/* Verification */}
                      <div className="pt-2 hover:bg-primary-green">
                        <div className="flex flex-row justify-between">
                          <Link
                            href="/"
                            onClick={closeMenu}
                            className="text-[12px]"
                          >
                            VERIFICATION
                          </Link>
                        </div>
                        <hr className="mt-2" />
                      </div>
                      {/* Contact */}
                      <div className="pt-2 hover:bg-primary-green">
                        <div className="flex flex-row justify-between">
                          <Link
                            href="/contact"
                            onClick={closeMenu}
                            className="text-[12px]"
                          >
                            CONTACT
                          </Link>
                        </div>
                        <hr className="mt-2" />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
