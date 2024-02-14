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
            OSHA 48-Hour Construction Safety and Health Training
          </span>
        </div>
        <div className="description py-2">
          <p className="py-2 font-semibold">Description</p>
          <p className="text-gray-700">
            The OSHA 48-Hour Construction Safety and Health Training is a
            comprehensive training program designed for construction supervisors
            and managers. This advanced program provides in-depth knowledge of
            OSHA standards and regulations, hazard recognition, and safety
            management systems in the construction industry.
          </p>
        </div>
        <div className="units py-2">
          <p className="py-2 font-semibold">Units</p>
          <p className="text-gray-700">
            <p>OSHA Construction Standards and Regulations</p>
            <p>Hazard Recognition and Assessment in Construction</p>
            <p>Fall Protection Systems and Procedures</p>
            <p>Scaffolding Safety</p>
            <p>Excavation Safety and Shoring</p>
            <p>Electrical Safety</p>
            <p>Trenching and Shoring</p>
            <p>Confined Space Entry</p>
            <p>Material Handling and Lifting Operations</p>
          </p>
        </div>
        <div className="course-outline py-2">
          <p className="py-2 font-semibold">Course Outline</p>
          <p className="text-gray-700">
            <p>Advanced OSHA Construction Standards and Regulations</p>
            <p>
              Hazard Identification, Risk Assessment, and Control in
              Construction
            </p>
            <p>Fall Protection Systems and Procedures</p>
            <p>Scaffolding Safety and Inspection</p>
            <p>Excavation Safety, Shoring, and Trenching</p>
            <p>Electrical Safety in Construction</p>
            <p>Confined Space Entry Procedures</p>
            <p>Material Handling and Lifting Operations</p>
          </p>
        </div>
        <div className="level py-2">
          <p className="py-2 font-semibold">Level</p>
          <p className="text-gray-700">Advanced</p>
        </div>
        <div className="duration py-2">
          <p className="py-2 font-semibold">Duration</p>
          <p className="text-gray-700">48 Hours</p>
        </div>
      </div>
    </Container>
  );
};

export default page;
