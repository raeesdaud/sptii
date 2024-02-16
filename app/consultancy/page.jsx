"use client";
import React, { useState } from "react";
import Container from "../components/Container";
import Consultancy from "../consultancyContent/page";

const Page = () => {
  const [selectedItem, setSelectedItem] = useState(0);

  const handleItemClick = (index) => {
    setSelectedItem(index);
  };

  const consultancyData = [
    // 1st
    {
      title: "Inspections",
    },
    // 2nd
    {
      title: "Audits",
    },
    // 3nd
    {
      title: "Investigations",
    },
    // 4th
    {
      title: "Safety Management System",
    },
    // 5th
    {
      title: "Environmental Management System",
    },
    // 6th
    {
      title: "Recruiting Safety Professionals",
    },
  ];

  return (
    <div>
      <Container>
        <div className="p-4">
          <h1 className="py-6 text-2xl font-bold my-4 text-primary-green">
            CONSULTANCY
          </h1>
          <div>
            <div className="pb-8 text-[14px] md:text-[16px] flex flex-col xl:flex-row gap-8">
              <div className="left py-4 h-[100%] w-[100%] xl:w-[25%] bg-gray-100 flex flex-col text-center">
                {/* Map Function */}
                {consultancyData.map((item, index) => (
                  <div
                    key={index}
                    className={`py-4 cursor-pointer ${
                      selectedItem === index
                        ? "bg-primary-green text-white"
                        : "hover:bg-gray-200"
                    }`}
                    onClick={() => handleItemClick(index)}
                  >
                    {item.title}
                  </div>
                ))}
              </div>
              <div className="right w-[100%] xl:w-[75%] ">
                {selectedItem !== null && (
                  <Consultancy
                    title={consultancyData[selectedItem].title}
                    description={consultancyData[selectedItem].description}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Page;
