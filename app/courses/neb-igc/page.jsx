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
            NEBOSH International General Certificate
          </span>
        </div>
        <div className="description py-2">
          <p className="py-2 font-semibold">Description</p>
          <p className="text-gray-700">
            The NEBOSH International General Certificate is a globally
            recognized qualification that provides a broad understanding of
            occupational health and safety principles and practices. This
            versatile program is suitable for individuals seeking to enter or
            progress within the occupational health and safety profession.
          </p>
        </div>
        <div className="units py-2">
          <p className="py-2 font-semibold">Units</p>
          <p className="text-gray-700">
            <p>Introduction to Occupational Safety and Health</p>
            <p>Workplace Hazards and Controls</p>
            <p>Risk Assessment and Management</p>
            <p>Occupational Health and Hygiene</p>
            <p>OHS Law</p>
            <p>OHS Management Systems</p>
          </p>
        </div>
        <div className="course-outline py-2">
          <p className="py-2 font-semibold">Course Outline</p>
          <p className="text-gray-700">
            <p>Principles of Occupational Safety and Health</p>
            <p>Hazard Identification, Risk Assessment, and Control</p>
            <p>Managing Occupational Health</p>
            <p>OHS Law and Regulations</p>
            <p>OHS Management Systems</p>
          </p>
        </div>
        <div className="level py-2">
          <p className="py-2 font-semibold">Level</p>
          <p className="text-gray-700">Undergraduate</p>
        </div>
        <div className="duration py-2">
          <p className="py-2 font-semibold">Duration</p>
          <p className="text-gray-700">05 Months</p>
        </div>
      </div>
    </Container>
  );
};

export default page;
