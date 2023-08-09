import React from "react";
import { Carousel, Container } from "react-bootstrap";
import ReviewCard from "./ReviewCard";

const reviews = [
  {
    username: "John Doe",
    date: "2023-05-20",
    topic: "Essay (Any Type)",
    content: "This is a great product! I would highly recommend it to anyone.",
    rating: 5,
  },
  {
    username: "John Doe",
    date: "2023-05-20",
    topic: "Essay (Any Type)",
    content: "This is a great product! I would highly recommend it to anyone.",
    rating: 5,
  },
  {
    username: "John Doe",
    date: "2023-05-20",
    topic: "Essay (Any Type)",
    content: "This is a great product! I would highly recommend it to anyone.",
    rating: 5,
  },
  {
    username: "John Doe",
    date: "2023-05-20",
    topic: "Essay (Any Type)",
    content: "This is a great product! I would highly recommend it to anyone.",
    rating: 3.5,
  },
  {
    username: "John Doe",
    date: "2023-05-20",
    topic: "Essay (Any Type)",
    content: "This is a great product! I would highly recommend it to anyone.",
    rating: 5,
  },
  {
    username: "John Doe",
    date: "2023-05-20",
    topic: "Essay (Any Type)",
    content: "This is a great product! I would highly recommend it to anyone.",
    rating: 4.5,
  },
  {
    username: "John Poe",
    date: "2023-05-20",
    topic: "Essay (Any Type)",
    content: "This is a great product! I would highly recommend it to anyone.",
    rating: 5,
  },
  // More reviews...
];

const chunk = (arr, size) =>
  Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
    arr.slice(i * size, i * size + size)
  );

const Reviews = () => {
  const reviewChunks = chunk(reviews, 3);

  return (
    <div className="p-sm-5 p-3 text-dark d-flex bg-light  flex-column align-items-center shadow-sm ">
      <h1 className="fw-bold text-center">What clients say about our writing service</h1>
      <Container className="p-sm-5 mt-5  rounded-4">
      <Carousel
    nextIcon={<span aria-hidden="true" style={{color:'black'}} className="carousel-control-next-icon" />}
    prevIcon={<span aria-hidden="true" className="carousel-control-prev-icon" />}
>
          {reviewChunks.map((reviewChunk, index) => (
            <Carousel.Item key={index}>
              <div style={{ display: "flex", justifyContent: "space-around" }}>
                {reviewChunk.map((review, idx) => (
                  <ReviewCard key={idx} review={review} />
                ))}
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </Container>
    </div>
  );
};

export default Reviews;
