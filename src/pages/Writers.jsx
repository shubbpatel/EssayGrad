import React from "react";
import writers from "../constants/writers";
import WriterBio from "../components/WriterBio";
import MyNavbar from "../components/MyNavbar";
import Footer from "../components/Footer";
import { Col, Row } from "react-bootstrap";
import girlimg from '../assests/book-girl.jpg'
import FAQ from "../components/FAQ";
import ScrollableBox from "../components/TextInfo";
import Reviews2 from "../components/Reviews2";
export default function Writers() {
  return (
    <div className="" style={{width: "100vw"}}>
      <MyNavbar />
      <div className="bg-body-secondary pt-2 pb-2">
        <Row>
          <Col className="d-flex align-items-center justify-content-center ">
 <h1>Hello, From Our Writers</h1>
          </Col>
          <Col className="d-flex align-items-center justify-content-center ">
          {/* <div className="d-flex align-items-center justify-content-center" > */}

           <img
           src={girlimg}
              alt="Banner"
              className="img-thumbnail rounded-5 w-50 h-auto "
              />
              {/* </div> */}
            </Col>
        </Row>
      </div>

      <div
        style={{ width: "100vw",maxHeight:'870px', overflow:'auto' }}
        className="mt-4 d-flex flex-wrap justify-content-center text-center pb-3"
      >
        {writers.map((writer, index) => (
          <div className="">
            <WriterBio
              style={{ maxWidth: "15rem", width: "95vw" }}
              writer={writer}
              key={index}
            />
          </div>
          // <Option key={writer.id} value={writer.id}>{`${writer.name} (${writer.specialization})`}</Option>
        ))}
      </div>
      <Reviews2/>
      <FAQ/>
      <ScrollableBox/>
      <Footer/>
    </div>
  );
}
