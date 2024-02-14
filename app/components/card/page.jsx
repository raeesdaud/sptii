// import React from 'react';
"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Page = ({ data }) => {
  const [courses, setCourses] = useState([]);
  

  useEffect(() => {
    // Fetch the data when the component mounts
    data.then((resolvedData) => {
      setCourses(resolvedData && resolvedData.data ? resolvedData.data : []);
    });
  }, []); // Empty dependency array ensures useEffect runs only once on mount
  // course.attributes.CardBackgroundImage.data.attributes.url;
   

  return (
    <div className="flex gap-6 flex-wrap mx-auto ">
      {courses &&
        courses.map((course, id) => (
          <div key={id} className="shadow-xl my-4">
            <div className="w-[300px]  hover:-translate-y-1 ease-in-out ransition-all duration-300 border">
              <div className="w-full h-[151px]">
              <Image
              className="w-full h-[151px]"
            src={`http://127.0.0.1:1337${course.attributes.CardBackgroundImage.data.attributes.url}`}
            width={1000}
                height={1000}
                alt="img"
              />
              </div>
              <div className="p-4">
                <h1 className="text-lg font-semibold">
                  {course.attributes.CourseTitle}
                </h1>
                <p className="mt-3 text-sm text-gray-600">
                  {course.attributes.CourseName}
                </p>
                <button
                  type="button"
                  className="mt-4 rounded-sm bg-primary-green px-2.5 py-1 text-[14px] font-semibold text-white shadow-sm hover:bg-green-800 "
                >
                  <Link href={`${course.id}`}>View More</Link>
                </button>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Page;
