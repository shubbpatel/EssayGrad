import React from "react";
import MyNavbar from "../components/MyNavbar";
import Footer from "../components/Footer";
import { Button, Col, Container, Row } from "react-bootstrap";
import WriterBio from "../components/WriterBio";
import Carousel from "react-multi-carousel";
import Reviews2 from "../components/Reviews2";
import FAQ from "../components/FAQ";
import ScrollableBox from "../components/TextInfo";

export default function ServicePage({ Obj, writers }) {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
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
    <div>
      <MyNavbar />
      <section className="footerbg text-center">
        <Container>
        <img src={Obj.imgUrl} alt="" className="rounded-4 w-75 h-auto" />

          {/* <Row>
            <Col className="p-5 d-flex flex-column justify-content-center align-items-center">
              <h1>{Obj.title}</h1>
              <br />
              <Button>{Obj.btnText}</Button>
            </Col>
            <Col className="p-5">
              <img src={Obj.imgUrl} alt="" className="rounded-4 w-50 h-auto" />
            </Col>
          </Row> */}
        </Container>
      </section>
      <section className="d-flex flex-column align-items-center justify-content-center p-4 ">
        <h1 className="">{Obj.writerTitle}</h1>
        <div className="w-75 p-2 rounded-4">
          <Carousel responsive={responsive} className="">
            {writers.map((writer, index) => (
              // <Carousel.Item>
              <WriterBio writer={writer} key={index} />
              // </Carousel.Item>
            ))}
          </Carousel>
        </div>
      </section>
      <Reviews2 />
      <FAQ />
      <ScrollableBox />

      <Footer />
    </div>
  );
}
