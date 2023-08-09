import React from "react";
import { Card, Button } from "react-bootstrap";
import StarRatings from "react-star-ratings";

const ReviewCard = ({ review }) => {
  return (
    <Card
      style={{
        maxWidth: "18rem",
        width: "90vw",
        maxHeight: "18rem",
        height: "90vh",
        margin: "2rem",
      }}
      className="bg-body shadow-lg hover-border rounded-4"
    >
      <Card.Body className="">
        {/* <Card.Title className="fw-bold">Customer Id : {review.customerId}</Card.Title> */}
        <Card.Subtitle className="mb-2 text-danger">
          Customer Id : <b>#{review.customerId}</b>
        </Card.Subtitle>
        {/* <hr /> */}
        <Card.Title
          className="fw-bold mt-3 text-primary"
          style={{ fontSize: "16px",borderBottom:'1px solid black' }}
        >
          {review.topic}
        </Card.Title>

        <Card.Text
          className="mb-5 text-bg-light p-2"
          style={{ maxHeight: "130px", overflow: "auto" }}
        >
          {review.review}
        </Card.Text>
        
        <Card.Text className="fw-bold d-flex flex-row align-items-center" style={{borderTop:'1px solid black'}}>
          {/* <small className="text-dark text-center"> */}
          {/* <p> Rating : </p> */}
          <p className="pb-1">
            <StarRatings
              rating={parseFloat(review.rating)}
              starRatedColor="#F49F3F"
              numberOfStars={5}
              name="rating"
              starDimension="16px"
              starSpacing="2px"
            />
          </p>
            <p className="pl-2"> {review.rating} </p>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ReviewCard;
