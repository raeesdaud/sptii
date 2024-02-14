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
            OSHA 30-Hour General Industry Outreach Training
          </span>
        </div>
        <div className="description py-2">
          <p className="py-2 font-semibold">Description</p>
          <p className="text-gray-700">
            The OSHA 30-Hour General Industry Outreach Training is a mandatory
            training program for individuals working in general industry
            settings who are not directly involved in hazardous operations. This
            introductory program provides an overview of OSHA standards and
            regulations, hazard recognition, and safety procedures.
          </p>
        </div>
        <div className="units py-2">
          <p className="py-2 font-semibold">Units</p>
          <p className="text-gray-700">
            <p>Introduction to OSHA</p>
            <p>Hazard Recognition and Identification</p>
            <p>Bloodborne Pathogens</p>
            <p>Personal Protective Equipment</p>
            <p>Electrical Safety</p>
            <p>Fire Prevention and Protection</p>
          </p>
        </div>
        <div className="course-outline py-2">
          <p className="py-2 font-semibold">Course Outline</p>
          <p className="text-gray-700">
            <p>OSHA Overview and Standards</p>
            <p>Hazard Identification and Assessment</p>
            <p>Workplace Safety and Health Programs</p>
            <p>Emergency Preparedness and Response</p>
          </p>
        </div>
        <div className="level py-2">
          <p className="py-2 font-semibold">Level</p>
          <p className="text-gray-700">Basic</p>
        </div>
        <div className="duration py-2">
          <p className="py-2 font-semibold">Duration</p>
          <p className="text-gray-700">30 Hours</p>
        </div>
      </div>
    </Container>
  );
};

export default page;
