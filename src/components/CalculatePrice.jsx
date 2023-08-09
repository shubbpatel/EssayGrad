/* eslint-disable default-case */
// import Link from "antd/es/typography/Link";
import React, { useEffect, useRef, useState } from "react";
import { Card, Form, Button, Row, Col } from "react-bootstrap";
// import Button from 'react-bootstrap/Button';
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { LinkContainer } from "react-router-bootstrap";

const CalculatePrice = () => {
  const [type, setType] = useState("Essay (Any Type)");
  const [deadline, setDeadline] = useState("1 day");
  const [institute, setInstitute] = useState("School");
  const [pages, setPages] = useState("1 page/ 275 words");
  const [price, setPrice] = useState(0);
  const [num, setNum] = useState(null);
  const [calculatingPrice, setCalculatingPrice] = useState(false);

  const pagesRef = useRef(pages);

  useEffect(() => {
    pagesRef.current = pages;
    console.log(pages);
  }, [pages]);
  const pp = pagesRef.current;
  if(pagesRef.current){
    console.log(pagesRef.current);
  }
  const types = ["Essay (Any Type)", "Blog", "Article"];
  const institutes = ["School", "College", "University", "Own Website"];
  const deadlines = [
    "1 day",
    "2 day",
    "3 days",
    "4 days",
    "5 days",
    "6 days",
    "10 days",
    "2 week",
  ];
  const pageAndWord_D = [
    "1 page/ 275 words",
    "2 pages/ 550 words",
    "3 pages/ 825 words",
    "4 pages/ 1100 words",
    "5 pages/ 1375 words",
    "6 pages/ 1650 words",
    "7 pages/ 1925 words",
    "8 pages/ 2200 words",
    "9 pages/ 2475 words",
    "10 pages/ 2750 words",
  ];
  const [pageList, setPageList] = useState(pageAndWord_D);

  const pageAndWord_S = [
    "1 page/ 550 words",
    "2 pages/ 1100 words",
    "3 pages/ 1650 words",
    "4 pages/ 2200 words",
    "5 pages/ 2750 words",
    "6 pages/ 3300 words",
    "7 pages/ 3850 words",
    "8 pages/ 4400 words",
    "9 pages/ 4950 words",
    "10 pages/ 5500 words",
  ];
  // ...

  // ...

  const calculatePrice = (n) => {
    setCalculatingPrice(true); // Set loading state to false after calculation

    let basePrice;

    switch (type) {
      case "Essay (Any Type)":
        basePrice = 10;
        break;
      case "Blog":
        basePrice = 15;
        break;
      case "Article":
        basePrice = 15;
        break;
      default:
        basePrice = 0;
    }
    switch (institute) {
      case "School":
        basePrice += 0;
        break;
      case "College":
        basePrice += 3;
        break;
      case "University":
        basePrice += 5;
        break;
      case "Own Website":
        basePrice = 15;
        break;
      default:
        basePrice = 0;
    }

    switch (deadline) {
      case "1 day":
        basePrice *= 1;
        break;
      case "2 day":
        basePrice *= 0.9;
        break;
      case "3 days":
        basePrice *= 0.8;
        break;
      case "4 days":
        basePrice *= 0.75;
        break;
      case "5 days":
        basePrice *= 0.75;
        break;
      case "6 days":
        basePrice *= 0.75;
        break;
      case "10 days":
        basePrice *= 0.75;
        break;
      case "2 week":
        basePrice *= 0.75;
        break;
      default:
        basePrice = 0.75;
    }
    switch (pages) {
      case "1 page/ 275 words":
        basePrice *= 1;
        break;
      case "1 page/ 550 words":
        basePrice *= 1.9;
        break;
      case "2 pages/ 550 words":
        basePrice *= 1.9;
        break;
      case "3 pages/ 825 words":
        basePrice *= 2.2;
        break;
      case "2 pages/ 1100 words":
        basePrice *= 3;
        break;
      case "4 pages/ 1100 words":
        basePrice *= 3;
        break;
      case "5 pages/ 1375 words":
        basePrice *= 3.7;
        break;
      case "3 pages/ 1650 words":
        basePrice *= 4.4;
        break;
      case "6 pages/ 1650 words":
        basePrice *= 4.4;
        break;
      case "7 pages/ 1925 words":
        basePrice *= 5.4;
        break;
      case "4 pages/ 2200 words":
        basePrice *= 5.7;
        break;
      case "8 pages/ 2200 words":
        basePrice *= 5.7;
        break;
      case "9 pages/ 2475 words":
        basePrice *= 7.1;
        break;
      case "5 pages/ 2750 words":
        basePrice *= 6.5;
        break;
      case "10 pages/ 2750 words":
        basePrice *= 7.9;
        break;
      case "6 pages/ 3300 words":
        basePrice *= 7.2;
        break;
      case "7 pages/ 3850 words":
        basePrice *= 8.1;
        break;
      case "8 pages/ 4400 words":
        basePrice *= 9.1;
        break;
      case "9 pages/ 4950 words":
        basePrice *= 10.1;
        break;
      case "10 pages/ 5500 words":
        basePrice *= 10.9;
        break;
    }

    setPrice(basePrice * n);
    setTimeout(() => {
      setCalculatingPrice(false); // Set loading state to false after calculation
    }, 1000);
  };

  useEffect(() => {

    // Calculate the price whenever any of the dependencies change
    calculatePrice(num); // Or pass the appropriate value for the number of spaces (1 or 2)
    
  }, [type, institute, deadline, pages,num]);

  return (
    <Card
      className="p-3 rounded-4"
      style={{
        width: "18rem",
        // borderRadius: "10%"
      }}
    >
      <Card.Title className="mb-3 fw-bold">Estimate the price</Card.Title>
      <Form>
        <ButtonGroup aria-label="Basic example" className="w-100">
          <Button
            variant="light"
            onClick={() => {
              setType("Essay (Any Type)");
           
            }}
          >
            Essay
          </Button>
          <Button
            variant="light"
            onClick={() => {
              setType("Blog");
             
            }}
          >
            Blog
          </Button>
          <Button
            variant="light"
            onClick={() => {
              setType("Article");
             
            }}
          >
            Article
          </Button>
        </ButtonGroup>
        <Form.Group controlId="essayType" className="mt-2">
          <Form.Select
            onChange={(e) => {
              setType(e.target.value);
             
            }}
            className="bg-light"
            style={{
              fontSize: "14px",
            }}
          >
            {/* <option>Writing Type</option> */}
            {types.map((type, index) => (
              <option key={index}>{type}</option>
            ))}
          </Form.Select>
        </Form.Group>
        <div className="mt-2">
          <Row className="p-0">
            <Col className="m-0">
              <Form.Group controlId="instituteType">
                {/* <Form.Label>Writing</Form.Label> */}
                <Form.Select
                  onChange={(e) => {
                    setInstitute(e.target.value);
                    
                  }}
                  className="bg-light"
                  style={{
                    width: "fit-content",
                    fontSize: "14px",
                  }}
                >
                  {/* <option>Institution</option> */}
                  {institutes.map((type, index) => (
                    <option key={index}>{type}</option>
                  ))}
                </Form.Select>
              </Form.Group>
            </Col>

            <Col>
              {" "}
              <Form.Group controlId="deadline">
                {/* <Form.Label>Deadline</Form.Label> */}
                <Form.Select
                  onChange={(e) => {
                    setDeadline(e.target.value);
                    
                  }}
                  className="bg-light"
                  style={{
                    // background: "#E5E6E9",
                    // width:'fit-content',
                    fontSize: "14px",
                  }}
                >
                  {/* <option>Deadline</option> */}
                  {deadlines.map((deadline, index) => (
                    <option key={index} className="select-option">
                      {deadline}
                    </option>
                  ))}
                </Form.Select>
              </Form.Group>
            </Col>
          </Row>
        </div>
        <Col
          className="d-flex justify-content-end pt-2 mt-2 rounded-2 bg-warning shadow-md"
        >
          <Form.Check
            inline
            label="Double Spaces"
            name="group1"
            type="radio"
            id="double"
            style={{ fontSize: "13px"}}
            onClick={() => {
              setPageList(pageAndWord_D);
              setNum(1);
            }}
          />
          <Form.Check
            inline
            label="Single Spaces"
            name="group1"
            type="radio"
            id="single"
            style={{ fontSize: "13px" }}
            onClick={() => {
              setPageList(pageAndWord_S);
              console.log(pp);
              setNum(2);

            }}
          />
        </Col>
        <Form.Group controlId="pages" className="mt-2 ">
          {/* <Form.Label>Deadline</Form.Label> */}
          <Form.Select
            onChange={(e) => {
              setPages(e.target.value);
             
            }}
            className="bg-light"
            style={{
              fontSize: "14px",
            }}
          >
            {/* <option>Pages</option> */}
            {pageList.map((deadline, index) => (
              <option key={index} className="select-option">
                {deadline}
              </option>
            ))}
          </Form.Select>
        </Form.Group>

        {calculatingPrice ? (
          <Card.Text className="mt-3 fw-bold">
          Price: <span className="loading-spinner"></span>
        </Card.Text>
          // <div className=""><strong></strong></span></div>
        ) : (
          <Card.Text className="mt-3 fw-bold">
            Price: <span style={{color:'green', fontSize:'18px'}}>$</span>{price ? price.toFixed(2) : "0.00"}
          </Card.Text>
        )}

     
      </Form>
      <LinkContainer to="/order">
        <Button
       
          variant="primary"
          className="mt-3 fw-bold"
        >
          Write My Assignment{" "}
        </Button>
      </LinkContainer>
    </Card>
  );

  // ...
};

export default CalculatePrice;
