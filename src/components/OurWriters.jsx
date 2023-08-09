import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import WriterProfileCard from "./WriterProfileCard";
import writers from "../constants/writers";

const OurWriters = () => {
  

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  return (
    <div>
      <div className="d-flex flex-column align-items-center mt-3">
        <h2 className="fw-bolder  text-center mt-3">Our World Class Essay Writers</h2>
        <p className="mt-2 text-center" style={{ maxWidth: "850px" }}>
          Choose your online essay writer who will work on your order. Our
          professional helpers are always here to assist you with "write an
          essay for me" requests.
        </p>
      </div>
      <div className=" rounded-3 p-lg-4">
        <Carousel responsive={responsive}>

          {writers.map((writer, index) => (
            <div style={{padding:'1rem'}} key={index}>

            <WriterProfileCard writer={writer}  />
            </div>
            ))}
        </Carousel>
      </div>
    </div>
  );
};

export default OurWriters;
