"use client";
import React, { useState } from "react";
import Container from "../components/Container";
import Training from "../CorpTraining/page";

const Page = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (index) => {
    setSelectedItem(index);
  };

  const trainingData = [
    {
      title: "Work at Height Training",
      description: "Work at height training is crucial...",
      mainText:
        "This training is designed for anyone who works at height, including:",
      listItem1: "Construction workers",
      listItem2: "Roofers",
      listItem3: "Window cleaners",
      listItem4: "Telecommunications workers",
      listItem5: "Maintenance personnel",
      listItem6: "Engineers",
      listItem7: "Surveyors",
      outlineList: "Recognizing and assessing fall hazards",
      duration: "4-8 Hours",
    },
    {
      title: "Scaffolding",
      description: "Work at height training is crucial...",
      mainText:
        "This training is designed for anyone who works at height, including:",
      listItem1: "Construction workers",
      outlineList: "Recognizing and assessing fall hazards",
      duration: "4-8 Hours",
    },
    // Add more items as needed
  ];

  return (
    <div>
      <Container>
        <div className="p-4">
          <h1 className="py-6 text-2xl font-bold my-4 text-primary-green">
            CORPORATE TRAININGS
          </h1>
          <div>
            <div className="pb-8 flex gap-8">
              <div className="left py-4 w-[20%] bg-gray-100 flex flex-col text-center">
                {trainingData.map((item, index) => (
                  <div
                    key={index}
                    className={`py-2 hover:bg-primary-green hover:text-white cursor-pointer ${
                      selectedItem === index ? "selected" : ""
                    }`}
                    onClick={() => handleItemClick(index)}
                  >
                    {item.title}
                  </div>
                ))}
              </div>
              <div className="right py-4 w-[80%] ">
                {selectedItem !== null && (
                  <Training
                    title={trainingData[selectedItem].title}
                    description={trainingData[selectedItem].description}
                    mainText={trainingData[selectedItem].mainText}
                    listItem1={trainingData[selectedItem].listItem1}
                    listItem2={trainingData[selectedItem].listItem2}
                    listItem3={trainingData[selectedItem].listItem3}
                    listItem4={trainingData[selectedItem].listItem4}
                    listItem5={trainingData[selectedItem].listItem5}
                    listItem6={trainingData[selectedItem].listItem6}
                    listItem7={trainingData[selectedItem].listItem7}
                    outlineList={trainingData[selectedItem].outlineList}
                    duration={trainingData[selectedItem].duration}
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
