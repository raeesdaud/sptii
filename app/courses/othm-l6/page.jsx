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
            OTHM Level 6 Diploma in Occupational Health and Safety
          </span>
        </div>
        <div className="description py-2">
          <p className="py-2 font-semibold">Description</p>
          <p className="text-gray-700">
            The OTHM Level 6 Diploma in Occupational Health and Safety is an
            internationally recognized qualification that equips individuals
            with the advanced knowledge and skills required to manage and
            control occupational health and safety risks. This comprehensive
            program is designed for individuals seeking to progress to
            senior-level positions in occupational health and safety management.
          </p>
        </div>
        <div className="units py-2">
          <p className="py-2 font-semibold">Units</p>
          <p className="text-gray-700">
            <p>Managing Safety and Health in Organizations</p>
            <p>Controlling Occupational Risks</p>
            <p>Investigating Workplace Accidents and Incidents</p>
            <p>Managing Occupational Health</p>
            <p>Occupational Health and Safety Law and Legislation</p>
            <p>Occupational Health and Safety Management Systems</p>
          </p>
        </div>
        <div className="course-outline py-2">
          <p className="py-2 font-semibold">Course Outline</p>
          <p className="text-gray-700">
            <p>Introduction to Occupational Health and Safety</p>
            <p>Risk Management</p>
            <p>Accident Investigation</p>
            <p>Occupational Health</p>
            <p>OHS Law and Legislation</p>
            <p>OHS Management Systems</p>
          </p>
        </div>
        <div className="level py-2">
          <p className="py-2 font-semibold">Level</p>
          <p className="text-gray-700">Post-Graduate</p>
        </div>
        <div className="duration py-2">
          <p className="py-2 font-semibold">Duration</p>
          <p className="text-gray-700">06 Months</p>
        </div>
      </div>
    </Container>
  );
};

export default page;
