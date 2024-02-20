//import Image from "next/image";
// import React from "react";
// import Container from "../components/Container";

// const getSingleCard = async ({ id }) => {
//   // API fetch Commmented
//   //   const response = await fetch(
//   //     `http://127.0.0.1:1337/api/cards/${id}?populate=CardBackgroundImage,units,CourseOutline`,
//   //     { cache: "no-store" }
//   //   );
//   //   const data = await response.json();
//   //   console.log(data);
//   //   return data;
//   // };

//   // async function page({ params: id }) {
//   //   const DATA = await getSingleCard(id);
//   //   const getSingleCardPost = DATA.data;
//   //   const { attributes } = getSingleCardPost;
//   //   const { CardBackgroundImage } = attributes;
//   //   console.log(CardBackgroundImage);

//   //   console.log("hello>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>.", getSingleCardPost);

//   // CardBackgroundImage.data.attributes.url;
//   return (
//     <Container>
//       {/* 
//       <div>
//         <div className="courseImg h-1/4 shadow-md  my-4  ">
//           <Image
//             className="  w-full h-96 object-cover object-center "
//             src={`http://127.0.0.1:1337${CardBackgroundImage.data.attributes.url}`}
//             width={1000}
//             height={1000}
//           />
//         </div>
//         <h1 className="text-2xl mt-14 text-gray-800 font-semibold">
//           Description:
//         </h1>
//         <p className="text-gray-600 text-lg mt-2">
//           {getSingleCardPost.attributes.CourseDescription}
//         </p>

//         <div className="my-7">
//           <p className="text-2xl  text-gray-800 font-semibold">Units:</p>
//           <ul className="text-gray-600 text-lg py-2">
//             <li className="py-2">{getSingleCardPost.attributes.units.one}</li>
//             <li className="py-2">{getSingleCardPost.attributes.units.two}</li>
//             <li className="py-2">{getSingleCardPost.attributes.units.three}</li>
//             <li className="py-2">{getSingleCardPost.attributes.units.four}</li>
//             <li className="py-2">{getSingleCardPost.attributes.units.five}</li>
//           </ul>
//         </div>

//         <div>
//           <p className="text-2xl text-gray-800 font-semibold">
//             Course Outline:
//           </p>
//           <ul className="text-gray-600 text-lg py-2">
//             <li className="py-2">
//               {getSingleCardPost.attributes.CourseOutline.one}
//             </li>
//             <li className="py-2">
//               {getSingleCardPost.attributes.CourseOutline.two}
//             </li>
//             <li className="py-2">
//               {getSingleCardPost.attributes.CourseOutline.three}
//             </li>
//             <li className="py-2">
//               {getSingleCardPost.attributes.CourseOutline.four}
//             </li>
//             <li className="py-2">
//               {getSingleCardPost.attributes.CourseOutline.five}
//             </li>
//           </ul>
//         </div>

//         <h1 className="text-2xl my-3  text-gray-800 font-semibold">
//           Duration:{" "}
//           <span className="text-gray-600 font-normal">
//             {getSingleCardPost.attributes.Duration}
//           </span>{" "}
//         </h1>
//       </div>
//        */}
//     </Container>
//   );
// };

// export default page;
