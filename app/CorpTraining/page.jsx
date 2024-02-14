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
  outlineList,
  duration,
}) => {
  return (
    <div>
      <div className="text-gray-700 text-justify">
        <div className="pb-4 text-xl md:text-2xl text-primary-green font-bold">
          <h1>{title}</h1>
        </div>
        <div className="introduction py-4">
          <h1 className="py-2 text-primary-green font-semibold">
            Introduction
          </h1>
          <p>{description}</p>
        </div>
        <div className="audiencelist py-4">
          <h1 className="py-2 text-primary-green font-semibold">Audience</h1>
          <p className="pb-2">{mainText}</p>
          <p className="py-1">{listItem1}</p>
          <p className="py-1">{listItem2}</p>
          <p className="py-1">{listItem3}</p>
          <p className="py-1">{listItem4}</p>
          <p className="py-1">{listItem5}</p>
          <p className="py-1">{listItem6}</p>
          <p className="py-1">{listItem7}</p>
        </div>
        <div className="outlinelist py-4">
          <h1 className="py-2 text-primary-green font-semibold">Outline</h1>
          <p>{outlineList}</p>
        </div>
        <div className="durationtime py-4">
          <h1 className="py-2 text-primary-green font-semibold">Duration</h1>
          <p>{duration}</p>
        </div>
      </div>
    </div>
  );
};

export default Training;
