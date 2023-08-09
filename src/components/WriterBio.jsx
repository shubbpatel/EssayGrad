import { StarFilled } from "@ant-design/icons";
import React, { useContext, useState } from "react";
import { Button } from "react-bootstrap";
// import writers from '../constants/writers';
import Rating from "react-rating";
import StarRatings from "react-star-ratings";
import AuthContext from "../contexts/AuthContexts";

const WriterBio = ({ writer }) => {
  // const [color, setColor] = useState(false);
  const [buttonText, setButtonText] = useState(false);
  const currentUser = useContext(AuthContext)

  const dj = () => {
    // setColor(!color);
    setButtonText(!buttonText);
  };
  const buttonStyle = {
    fontSize: "13px",
    width:'max-content'
  };

  // const productRating = 4;
  return (
    <>
      {/* {
        writers.map((writer) => ( */}
      <div
        className="rounded-4 p-1  pt-3 shadow-lg m-sm-4 hover-border text-center"
        style={{
          maxWidth: "330px",
          maxHeight: "560px",
          // border: "1px solid blue",
          // overflow: "auto",
        }}
      >
        <img
          src={writer.imgSrc}
          className="rounded-circle mb-1"
          alt=""
          style={{ width: "100vw", maxWidth: "60px" }}
        />
        <h3>{writer.name}</h3>
        <div className="d-flex justify-content-center">
          <StarRatings
            rating={parseFloat(writer.rating)}
            starRatedColor="#F49F3F"
            numberOfStars={5}
            name="rating"
            starDimension="16px"
            starSpacing="2px"
          />
          <span className="m-1 fw-bold">{writer.rating}</span>
        </div>
        <p>
          <b>Projects Completed : {writer.projectsCompleted}</b>
        </p>
        <hr />
        <p style={{ color: "green" }}>
          <b>{writer.degree}</b>{" "}
        </p>
        <hr />

        {/* <p style={{maxHeight:'100px', overflow:'auto',color:'black'}}>{writer.bio}</p> */}
        {/* <hr /> */}
        <p className="fw-bold bgl" style={{ fontSize: "12px" }}>
          {writer.specializedIn}
        </p>
        <hr />
        <div className="d-flex align-items-start justify-content-around">

        <Button
          variant="btn-outline-dark"
          className="btn-lg p-3 btn-outline-dark"
          style={{ fontSize: "13px" }}
          onClick={()=>{
            window.location ='writer-profile'
          }}
          >
          <strong>About Writer</strong>
        </Button>
        <Button
          variant="primary"
          className="btn-lg p-3 fw-bold"
          style={buttonStyle}
          onClick={()=>{
            if(currentUser && window.location !== '/order'){
              window.location = '/order'
            }else if(currentUser && window.location === '/order'){

              dj();
            } 
            // else{
            //   window.location = '/login'
            // }

          }}
          >
          {buttonText ? "Selected" : "Hire Writer"}
        </Button>
          </div>
          <div>
            hello
          </div>
      </div>
      {/* ))
    } */}
    </>
  );
};

export default WriterBio;
