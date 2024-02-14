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
            OSHA 30-Hour Construction Outreach Training
          </span>
        </div>
        <div className="description py-2">
          <p className="py-2 font-semibold">Description</p>
          <p className="text-gray-700">
            The OSHA 30-Hour Construction Outreach Training is a mandatory
            training program for individuals working in construction settings
            who are not directly involved in hazardous operations. This
            introductory program provides an overview of OSHA standards and
            regulations, hazard recognition, and safety procedures specific to
            the construction industry.
          </p>
        </div>
        <div className="units py-2">
          <p className="py-2 font-semibold">Units</p>
          <p className="text-gray-700">
            <p>Introduction to OSHA and Construction Standards</p>
            <p>Hazard Recognition and Identification in Construction</p>
            <p>Fall Protection</p>
            <p>Scaffolding</p>
            <p>Excavation Safety</p>
            <p>Electrical Safety</p>
          </p>
        </div>
        <div className="course-outline py-2">
          <p className="py-2 font-semibold">Course Outline</p>
          <p className="text-gray-700">
            <p>OSHA Construction Standards and Regulations</p>
            <p>Hazard Identification and Assessment in Construction</p>
            <p>Fall Protection Systems and Procedures</p>
            <p>Scaffolding Safety</p>
            <p>Excavation Safety and Shoring</p>
            <p>Electrical Safety in Construction</p>
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
