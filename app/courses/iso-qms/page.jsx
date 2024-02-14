import Container from "@/app/components/Container";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <Container>
      <div className="p-4 md:p-20 text-primary-green text-[14px] md:text-[16px] text-justify">
        <div className="heading py-4">
          <Link
            href="/internationalCourses"
            className="text-xl md:text-2xl font-bold"
          >
            INTERNATIONAL COURSES /
          </Link>
          <span className="pl-2 text-xl md:text-2xl font-bold">
            ISO 9001 Quality Management System
          </span>
        </div>
        <div className="description py-2">
          <p className="py-2 font-semibold">Description</p>
          <p className="text-gray-700">
            ISO 9001 is an internationally recognized standard that provides a
            framework for organizations to establish, implement, and maintain a
            QMS to consistently deliver products and services that meet customer
            requirements and enhance customer satisfaction.
          </p>
        </div>
        <div className="course-outline py-2">
          <p className="py-2 font-semibold">Course Outline</p>
          <p className="text-gray-700">
            <p>Introduction to ISO 9001 and QMS concepts</p>
            <p>Quality policy and objectives setting</p>
            <p>Product and service realization planning</p>
            <p>Quality control and assurance</p>
            <p>Monitoring, measurement, analysis, and improvement</p>
            <p>Management responsibility</p>
            <p>Internal audits</p>
            <p>Management review</p>
          </p>
        </div>
        <div className="duration py-2">
          <p className="py-2 font-semibold">Duration</p>
          <p className="text-gray-700">05 Days</p>
        </div>
        <div className="price py-2">
          <p className="py-2 font-semibold">Price</p>
          <p className="text-gray-700">PKR 80,000</p>
        </div>
      </div>
    </Container>
  );
};

export default page;
