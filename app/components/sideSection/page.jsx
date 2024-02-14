"use client";

// import React from "react";
// import Link from "next/link";

// function Page() {

//   return (
//     <div className="flex flex-col space-y-3 bg-gray-100 w-52 font-medium pr-16 my-6 py-3">
//     <button><a  href="/aboutUs">About</a></button>
//       <button>
//         <Link href="/">Ceo message</Link>
//       </button>
//       <button>
//         <Link href="/">Our partners</Link>
//       </button>
//       <button>
//         <Link href="/">Our Clients</Link>
//       </button>
//       <button>
//         <Link href="/">Testimonial</Link>
//       </button>
//       <button>
//         <Link href="/">Gallery</Link>
//       </button>
//     </div>
//   );
// }

// export default Page;
import React from "react";
import NavLink from "next/link";
import { usePathname } from "next/navigation";

function Page() {
  const pathname = usePathname();

  return (
    <div className="w-full lg:w-52 flex flex-col space-y-3 my-4  bg-gray-100 font-medium transition-all ease-in duration-300  shadow-md">
      <NavLink href="/aboutUs">
        <button
          className={`${
            pathname === "/aboutUs"
              ? "bg-primary-green text-white "
              : "bg-gray-100 hover:bg-gray-300"
          } w-full py-2 text-lg font-medium`}
        >
          About Us
        </button>
      </NavLink>

      <NavLink href="/ceoMessage">
        <button
          className={`${
            pathname === "/ceoMessage"
              ? "bg-primary-green text-white"
              : "bg-gray-100 hover:bg-gray-300"
          } w-full py-2 text-lg font-medium  `}
        >
          Ceo Message
        </button>
      </NavLink>

      <NavLink href="/ourTeam">
        <button
          className={`${
            pathname === "/ourTeam"
              ? "bg-primary-green text-white"
              : "bg-gray-100 hover:bg-gray-300"
          } w-full py-2 text-lg font-medium  `}
        >
          Our Team
        </button>
      </NavLink>

      {/*  
        <NavLink href="/ourClients" >
          <button className={`${pathname === '/ourClients'? 'bg-primary-green text-white':'bg-gray-100 hover:bg-gray-300'} w-52 py-2 text-lg font-medium  `}>Our Clients</button>
        </NavLink>
  */}
      <NavLink href="/testimonial">
        <button
          className={`${
            pathname === "/testimonial"
              ? "bg-primary-green text-white"
              : "bg-gray-100 hover:bg-gray-300"
          } w-full py-2 text-lg font-medium  `}
        >
          Testimonial
        </button>
      </NavLink>

      <NavLink href="/gallery">
        <button
          className={`${
            pathname === "/gallery"
              ? "bg-primary-green text-white"
              : "bg-gray-100 hover:bg-gray-300"
          } w-full py-2 text-lg font-medium  `}
        >
          Gallery
        </button>
      </NavLink>
    </div>
  );
}

export default Page;
