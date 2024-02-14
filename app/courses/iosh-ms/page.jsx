import Container from "@/app/components/Container";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <Container>
      <div className="p-4 md:p-20 text-primary-green text-[14px] md:text-[16px] text-justify">
        <div className="heading py-4 ">
          <Link
            href="/internationalCourses"
            className="text-xl md:text-2xl font-bold"
          >
            INTERNATIONAL COURSES /
          </Link>
          <span className="pl-2 text-xl md:text-2xl font-bold">
            IOSH MANAGING SAFELY
          </span>
        </div>
        <div className="description py-2">
          <p className="py-2 font-semibold">Description</p>
          <p className="text-gray-700">
            IOSH Managing Safely is a globally recognized qualification that
            provides managers and supervisors with the essential knowledge and
            skills to effectively manage occupational health and safety risks in
            the workplace. This practical program is designed to empower
            managers to create a safer and healthier work environment for all.
          </p>
        </div>
        <div className="units py-2">
          <p className="py-2 font-semibold">Units</p>
          <p className="text-gray-700">
            <p>Understanding the Role of the Safety Manager</p>
            <p>Managing Safety Responsibilities</p>
            <p>Assessing Workplace Risks</p>
            <p>Controlling Workplace Risks</p>
            <p>Promoting a Safety Culture</p>
          </p>
        </div>
        <div className="course-outline py-2">
          <p clas sName="py-2 font-semibold">Course Outline</p>
          <p className="text-gray-700">
            <p>Introduction to Occupational Safety and Health Management</p>
            <p>Risk Management in the Workplace</p>
            <p>Hazard Identification and Control</p>
            <p>Incident Investigation and Reporting</p>
            <p>Safety Culture and Leadership</p>
          </p>
        </div>
        <div className="level py-2">
          <p className="py-2 font-semibold">Level</p>
          <p className="text-gray-700">Vocational</p>
        </div>
        <div className="duration py-2">
          <p className="py-2 font-semibold">Duration</p>
          <p className="text-gray-700">04 Days</p>
        </div>
      </div>
    </Container>
  );
};

export default page;
