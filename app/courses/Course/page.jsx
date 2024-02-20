import React from "react";
import Link from "next/link";
import Image from "next/image";

const Course = ({ pageRoute, name }) => {
  return (
    <div>
      <div className="bg-gray-200 px-3 h-[352px] w-[272px]">
        <div className="py-3">
          <Image
            src="/imgs/NEBOSH.png"
            alt=""
            height="1000000"
            width="1000000"
          />
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
