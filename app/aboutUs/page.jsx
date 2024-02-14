import React from "react";
import MissionCorasole from "../components/missionCorasole/page";
import Container from "../components/Container";
import SideSection from "../components/sideSection/page";

function page() {
  return (
    <Container className="max-w-screen-xl mx-auto">
      <div className="flex flex-col lg:flex-row space-x-0 lg:space-x-11 my-3">
        <div>
          <SideSection />
        </div>

        <div className="text-justify text-[14px] md:text-[16px]">
          <div className="left my-4 ">
            <h1 className="text-2xl py-2 text-neutral-800 font-semibold">
              Safety Plus Training International
            </h1>
            <p className="text-gray-600">
              SPTI comprises a team of highly skilled safety professionals,
              practitioners, and trainers with a rich blend of instructional and
              hands-on expertise spanning diverse industries, multinational
              corporations, construction ventures, and oil and gas sectors. We
              specialize in delivering a wide array of internationally
              accredited training programs, offering both in-house and on-site
              solutions that prioritize high-quality services enriched with
              exceptional value. With established offices and training
              facilities in Pakistan and Saudi Arabia, we are currently
              executing a strategic expansion plan in Gulf countries, Africa,
              Bangladesh, and the Philippines
            </p>

            <h1 className="text-2xl py-2 text-neutral-800 font-semibold mt-2">
              Our Vission
            </h1>
            <p className="text-gray-600">
              To be a world-leading organization, empowering individuals and
              organizations to combat unemployment through innovative training,
              support, and opportunity creation initiatives.
            </p>

            <h1 className="text-2xl py-2 text-neutral-800 font-semibold mt-2">
              Our Mission
            </h1>
            <div className="text-gray-600">
              <ul>
                <li className="py-2">
                  {" "}
                  &#x2022; To gain a reputation by training, and qualifying
                  professionals and consulting corporate companies through
                  innovation and to grow along with them in creativity.
                </li>
                <li className="py-2">
                  &#x2022; To promote global safety standards across industries
                  and geographies.
                </li>
                <li className="py-2">
                  &#x2022; To equip Individuals with the skills and knowledge
                  through comprehensive trainings and support they need to
                  succeed in the workforce and reduce unemployment
                </li>
              </ul>
            </div>
          </div>
          <div className="right"></div>
        </div>
      </div>
    </Container>
  );
}

export default page;
