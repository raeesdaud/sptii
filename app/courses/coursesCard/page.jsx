import React from "react";
import Link from "next/link";

const Course = ({ pageRoute, name }) => {
  return (
    <div>
      <div className="bg-gray-200 px-3 h-[352px] w-[272px]">
        <div className="py-3">
          <img src="/imgs/NEBOSH.png" alt="" />
        </div>
        <Link href={pageRoute}>
          <p className="text-primary-green text-[16px] font-semibold text-center">
            {name}
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Course;
