import React from "react";

const Consultancy = ({ title, description }) => {
  return (
    <div>
      <div className="text-black text-justify">
        <div className="main-title pb-4 text-xl md:text-3xl text-primary-green font-bold">
          <h1>{title}</h1>
        </div>
        <div className="introduction py-2">
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Consultancy;
