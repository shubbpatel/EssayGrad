import React, { useContext } from "react";
import { Card, Button, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faStar as fasFaStar,
} from "@fortawesome/free-regular-svg-icons";
import cardgirl from "../assests/cardgirl.jpg";
import Rating from "react-rating";
import { StarFilled } from "@ant-design/icons";
import AuthContext from "../contexts/AuthContexts";

const WriterProfileCard = ({writer}) => {

  const currentUser = useContext(AuthContext)
  return (
    <Card
      style={{ maxWidth: "22rem",width:'90vw',height: "auto", margin: "0rem" }}
      className=" shadow-lg hover-border rounded-4"
    >
      <Card.Body>
        <Row
          style={{ borderBottom: "1px dashed #F3F4FE", borderWidth: "5px" }}
          className="mb-3 pb-3"
        >
          <Col md={6}>
            <Row>
              <Col
                // md={6}
                className="d-flex justify-content-center align-items-center mb-2 mb-sm-0"
              >
                <img
                  src={writer.imgSrc}
                  className="rounded-circle"
                  alt=""
                  style={{ width: "100vw", maxWidth:'60px' }}
                />
              </Col>
              <Col
                // md={6}
                className="d-flex  align-items-center justify-content-center flex-column"
              >
                <Card.Subtitle style={{ fontSize: "15px" }}>
                  {" "}
                  <b>{(writer.name)}</b>{" "}
                </Card.Subtitle>
                <div>
                  <StarFilled style={{ color: "#F49F3F", fontSize: "11px" }} />
                  <StarFilled style={{ color: "#F49F3F", fontSize: "11px" }} />
                  <StarFilled style={{ color: "#F49F3F", fontSize: "11px" }} />
                  <StarFilled style={{ color: "#F49F3F", fontSize: "11px" }} />
                  <StarFilled style={{ color: "#F49F3F", fontSize: "11px" }} />
                </div>

                <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
              </Col>
            </Row>
          </Col>
          <Col md={6}></Col>
        </Row>
        <div
          style={{ borderBottom: "1px dashed #F3F4FE", borderWidth: "5px" }}
          className="pb-3 mb-3"
        >
          <Row className="mt-3 mb-4">
            <Col
              md={6}
              className="fs-sm d-flex align-items-start justify-content-start"
              style={{ fontSize: "12px" }}
            >
              <span className="bullet2">s</span>
              <b>100% : </b> Success Rate{" "}
            </Col>
            <Col
              md={6}
              className="fs-sm  d-flex align-items-start justify-content-start"
              style={{ fontSize: "12px" }}
            >
              <span className="bullet2">s</span>
              <b>4405 : </b> Reviews{" "}
            </Col>
          </Row>
          <Row>
            <Col
              md={6}
              className="fs-sm d-flex align-items-start justify-content-start"
              style={{ fontSize: "12px" }}
            ><span className="bullet2">s</span>
              <b>3434:</b>Finished orders
            </Col>
            <Col
              md={6}
              className="fs-sm d-flex align-items-start justify-content-start"
              style={{ fontSize: "12px" }}
            >
              <span className="bullet2">s</span>
              <b>Degre :</b>Master’s
            </Col>
          </Row>
        </div>

        <Card.Text
          className="fs-sm d-flex align-items-start justify-content-start"
          style={{ fontSize: "14px" }}
        >
          <strong>Competences:</strong> History, Sociology, Philosophy, Ethics,
          English Literature
        </Card.Text>
        <div className="d-flex align-items-start justify-content-around">
          <Button variant="btn-outline-dark" className="btn-lg p-3 btn-outline-dark" style={{ fontSize: "13px" }} onClick={()=>{
            window.location = '/writer-profile'
          }}>
            <strong> About Writer</strong>
          </Button>
          <Button
            variant="primary"
            style={{ fontSize: "13px"}}
            className="btn-lg p-3"
            onClick={()=>{
              if(currentUser){
                window.location = '/order'
              }else{
                window.location = '/login'
              }
            }}
          >
            <strong> Hire Writer</strong>
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default WriterProfileCard;
