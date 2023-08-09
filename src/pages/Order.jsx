import React, { useState } from "react";
import { Steps } from "antd";
import OrderDetails from "../components/OrderDetails";
import WriterSelection from "../components/WriterSelection";
import MyNavbar from "../components/MyNavbar";
import Payment3 from "../components/Payment3";
import EssayDetailsStep from "../components/OrderDetail2";
import WriterSelectionStep2 from "../components/writerselection2";
import { Button, Col, Row } from "react-bootstrap";

const { Step } = Steps;

const steps = [
  {
    title: "Order Details",
    content: <EssayDetailsStep />,
  },
  {
    title: "Select Writer",
    content: <WriterSelectionStep2 />,
  },
  {
    title: "Make Payment",
    content: <Payment3 />,
  },
];

const OrderPage = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const next = () => {
    setCurrentStep(currentStep + 1);
  };

  const previous = () => {
    setCurrentStep(currentStep - 1);
  };

  return (
    <div >
      <MyNavbar />
      <div
        className="m-auto mt-3 rounded-2 overflow-auto skyBlueBorder"
        style={{
          maxHeight: "710px",
          height: "95vh",
          width: "95vw",
          maxWidth: "95vw",
        }}
      >
        <div className="m-3">
          <Steps current={currentStep}>
            {steps.map((step, index) => (
              <span title={step.title} className="fw-bold" key={index}></span>
            ))}
          </Steps>
        </div>

        <div
          style={{ maxHeight: "600px", minHeight: "599px", overflow: "auto" }}
          className="ourbg" >
          {steps[currentStep].content}
        </div>
        <div className="pt-2 d-flex justify-content-around ">
          {currentStep > 0 && (
            <Button
              variant="btn-outline-dark"
              className="btn-sm btn-outline-dark fw-bold float-start w-25"
              onClick={() => previous()}
            >
              Previous
            </Button>
          )}

          {currentStep < steps.length - 1 && (
            <Button
              variant="btn-primary"
              className="btn-sm fw-bold btn-primary float-end w-25"
              onClick={() => next()}
            >
              Next
            </Button>
          )}
        </div>

        {/* <Col md={6}> */}
        {/* </Col> */}
      </div>
    </div>
  );
};

export default OrderPage;
