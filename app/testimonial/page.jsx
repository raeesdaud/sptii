import React from "react";
import Container from "../components/Container";
import SideSection from "../components/sideSection/page";
import SliderTestimonial from "../components/sliderTestimonial/page";

function page() {
  return (
    <Container className="max-w-screen-xl mx-auto">
      <div className="flex flex-col lg:flex-row space-x-0 lg:space-x-11 my-3">
        <div className="right">
          <SideSection />
        </div>
        <div className="left">
          <SliderTestimonial />
        </div>
      </div>
    </Container>
  );
}

export default page;
