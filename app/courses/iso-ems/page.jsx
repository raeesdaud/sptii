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
            ISO 14001 Environmental Management System
          </span>
        </div>
        <div className="description py-2">
          <p className="py-2 font-semibold">Description</p>
          <p className="text-gray-700">
            ISO 14001 is an internationally recognized standard that provides a
            framework for organizations to identify, control, and monitor their
            environmental impacts. Implementing an ISO 14001 EMS can help
            organizations reduce their environmental footprint, improve
            operational efficiency, and gain a competitive edge.
          </p>
        </div>
        <div className="course-outline py-2">
          <p className="py-2 font-semibold">Course Outline</p>
          <p className="text-gray-700">
            <p>Introduction to ISO 14001 and EMS concepts</p>
            <p>Environmental aspects and impacts identification</p>
            <p>Environmental policy and objectives setting</p>
            <p>Environmental risk assessment and control</p>
            <p>Environmental management programs and procedures</p>
            <p>Monitoring, measurement, and evaluation</p>
            <p>Environmental management system audits</p>
            <p>Continuous improvement</p>
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
