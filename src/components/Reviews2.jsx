import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ReviewCard from "./ReviewCard";
import review from "../constants/reviews";



const Reviews2 = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 4,
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
    <div className="pt-3 pb-5 footerbg">
      <h2 className="fw-bold text-center mb-2 pt-4 mt-2">
        What clients say about our writing service
      </h2>
      <br />
      <div className="m-3 rounded-4">
        <Carousel responsive={responsive}>
          {review.map((review, index) => (
           
            <ReviewCard review={review} key={index} />
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Reviews2;
