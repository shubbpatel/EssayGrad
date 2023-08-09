import { CheckCircleOutlined } from "@ant-design/icons";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const Footer = () => {
  const services = [
    {tag :"Pay for essay",
  url:'/'},
   {tag: "Write my essay",
  url:'/'} /*... add all your services items here */,
    {tag:"How it works?",
  url:'/how-it-works'} /*... add all your about items here */,

  ];
  const about = [
    {tag:"About us",
  url:'/about'},
    {tag:"Privacy Policy",
  url:'/privacy-policy' }/*... add all your about items here */,
    {tag:"Terms & Conditions",
  url:'terms-of-service'} /*... add all your about items here */,
    {tag:"Cancellation & Refund Policy",
  url:'/cancellation'} /*... add all your about items here */,
  ];
  const tools = [
    {tag:"Writing tools",
  url:'/'},
    {tag:"Free essay writing tools",
  url:'/'},
    {tag:"Plagiarism checker",
  url:'/'} /*... add all your tools items here */,
  ];
  const press = [
    {tag:"Press and media",
  url:'/'},
    {tag:"Brand assets",
  url:'/'} /*... add all your press items here */,
    {tag:"Brand assets",
  url:'/'} /*... add all your press items here */,
  ];
  const contact = [
   { tag:"+1 (888) 337 5415",
  url:'/'},
    {tag:"Contact us",
  url:'/contact-us'},
  ];

  const renderLinks = (links) => {
    return links.map((link, index) => (
      
        <div key={index} style={{ lineHeight: "10px" }} className="mt-3"  >
          <Link
            to={link.url}
            style={{
              color: "black",
              textDecoration: "none",
              fontSize: "14px",
              cursor: "pointer",
            }}
          >
            {link.tag}
          </Link>
        </div>
      
    ));
  };

  return (
    <footer className="footerbg text-dark pt-5 pb-3 " style={{marginBottom:'0px'}}>
      <Container>
        <Row className="d-none">
          <Col>
            <h4>Services</h4>
          </Col>
          <Col>
            <h4>About</h4>
          </Col>
          <Col>
            <h4></h4>
          </Col>
          <Col>
            <h4></h4>
          </Col>
          <Col>
            <h4>Contact US</h4>
          </Col>
        </Row>
        <Row className="flex-column flex-sm-row text-sm-start text-center">
          <Col className=" d-sm-none"> <h4 className="text-dark d-flex justify-content-center align-items-center fw-bolder ">
                <CheckCircleOutlined
                  style={{ color: "green", marginRight: "6px",borderBottom:'1px solid black' }}
                />
                Essay<span className="text-primary fs-3">Grad</span>
              </h4></Col>
          <Col>{renderLinks(services)}</Col>
          <Col>{renderLinks(about)}</Col>
          <Col>{renderLinks(tools)}</Col>
          <Col>{renderLinks(press)}</Col>
          <Col>{renderLinks(contact)}</Col>
        </Row>
        <Row className="text-center mt-4">
          <Col>
            © {new Date().getFullYear()} Essaygrad.com. All rights reserved.
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
