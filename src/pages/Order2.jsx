import React, { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import OrderDetails from "../components/OrderDetails";
import WriterSelection from "../components/WriterSelection";
import MyNavbar from "../components/MyNavbar";
import Footer from "../components/Footer";
import Payment3 from "../components/Payment3";
import EssayDetailsStep from "../components/OrderDetail2";
import WriterSelectionStep2 from "../components/writerselection2";

export default function Order2() {
  const [step, setStep] = useState(1);

  if(step ===1 ){
    const cl  = document.getElementsByClassName('btn1Color');
    if(cl.length > 0 && step === 2){
        
        cl[0].style.backgroundColor = 'green'
      }
  }else if(step === 2){
    const cl  = document.getElementsByClassName('btn1Color');
    if(cl.length > 0 && step === 2){
        
        cl[0].style.backgroundColor = 'green'
      }
  }else if(step === 3){
    const cl  = document.getElementsByClassName('btn1Color');
    if(cl.length > 0 && step === 2){
        
        cl[0].style.backgroundColor = 'green'
      }
  }
  return (
    <div>
        <MyNavbar/>
        <Container>

      <Row>
        <Col className="btn1Color">
        <button className="w-100"
          onClick={() => {
              setStep(1);
            }}
            >
          <strong>Step 1</strong>
        </button>
            </Col>
            <Col className="btn2Color">
        <button className="w-100"
          onClick={() => {
              setStep(2);
             
            }}
            >
          {" "}
          <strong>Step 2</strong>
        </button>
            </Col>
            <Col className="btn3Color">
        <button className="w-100"
          onClick={() => {
              setStep(3);
              const cl  = document.getElementsByClassName('btn2Color');
              if(cl.length > 0){
                  
                  cl[0].style.backgroundColor = 'green'
                }
            }}
            >
          {" "}
          <strong>Step 3</strong>
        </button>
            </Col>
      </Row>
      <div>
        {/* {step === 1 && <EssayDetailsStep />} */}
        {step === 1 && <EssayDetailsStep />}
        {step === 2 && <WriterSelectionStep2 />}
        {step === 3 &&  <Payment3/> }
      </div>
                </Container>
      <Footer/>
    </div>
  );
}
