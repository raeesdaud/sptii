import React from "react";

const Training = ({
  title,
  description,
  mainText,
  listItem1,
  listItem2,
  listItem3,
  listItem4,
  listItem5,
  listItem6,
  listItem7,
  outlineText1,
  outlineText2,
  outlineText3,
  outlineText4,
  outlineText5,
  outlineText6,
  duration,
}) => {
  return (
    <div>
      <div className="text-black text-justify">
        <div className="main-title pb-4 text-xl md:text-3xl text-primary-green font-bold">
          <h1>{title}</h1>
        </div>
        <div className="introduction py-2">
          <h1 className="py-2 text-primary-green font-semibold">
            Introduction
          </h1>
          <p>{description}</p>
        </div>
        <div className="audience-list py-2">
          <h1 className="py-2 text-primary-green font-semibold">Audience</h1>
          <p className="pb-2">{mainText}</p>
          <div className="text-gray-800 text-[14px] md:text-[15px]">
            <p className="py-1">{listItem1}</p>
            <p className="py-1">{listItem2}</p>
            <p className="py-1">{listItem3}</p>
            <p className="py-1">{listItem4}</p>
            <p className="py-1">{listItem5}</p>
            <p className="py-1">{listItem6}</p>
            <p className="py-1">{listItem7}</p>
          </div>
        </div>
        <div className="outline-list py-2 text-left">
          <h1 className="py-2 text-primary-green font-semibold">Outline</h1>
          <div className="text-gray-900 text-[14px] md:text-[15px]">
            <p className="py-1">{outlineText1}</p>
            <p className="py-1">{outlineText2}</p>
            <p className="py-1">{outlineText3}</p>
            <p className="py-1">{outlineText4}</p>
            <p className="py-1">{outlineText5}</p>
            <p className="py-1">{outlineText6}</p>
          </div>
        </div>
        <div className="duration-time py-2">
          <h1 className="py-2 text-primary-green font-semibold">Duration</h1>
          <p>{duration}</p>
        </div>
      </div>
    </div>
  );
};

export default Training;