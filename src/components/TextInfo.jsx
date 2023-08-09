import React from "react";
import { Container, Card, Row, Col } from "react-bootstrap";

const ScrollableBox = () => {
  return (
    <Container className="d-flex justify-content-center flex-column align-items-center p-sm-5 pt-5 pb-5 ">
      <h1>
        <b>Essay Writing Process</b>
      </h1>
      <Card
        className="rounded-4 mt-5 p-sm-3 shadow-lg d-flex align-items-center textInfo"
        style={{
          width: "auto",
          height: "40rem",
          overflow: "auto",
          border: "2px solid #F6FAFE",
        }}
      >
        {/* <Row className="d-flex"> */}
          {/* <Col> */}
            {" "}
            <Card.Body>
              {/* <Card.Title>
            Get high-quality and timely essay writing help
          </Card.Title> */}
             
              {/* <h5 className="fw-bold">Help right away from an essay writer </h5>
              <p className="w-75">
                interface like essay pro.com Want to ask for and receive
                immediate assistance from a qualified essay writer? We got your
                back! Regardless of whether your paper is due in a week or a
                day, just get in touch with us and say, "Write my Assignment," and
                we will complete it for you.{" "}
              </p> */}
              <h5 className="text-primary text-center fw-bold">
                  Help right away from an essay writer 
                </h5>
                <p> Want to ask for and receive immediate assistance from a
                qualified essay writer? We got your back! Regardless of whether
                your paper is due in a week or a day, just get in touch with us
                and say, "Write my Assignment," and we will complete it for you. </p>
               
                <h5 className="p-4 text-bg-primary fw-bold text-center">
                Here are some pointers to help you make the most of our essay
                writing service.
              </h5>

              <p
                className="p-4 rounded-4"
                // style={{ border: "1px solid  #0d6efd" }}
              >
                <b className="text-primary">
                <span style={{color:'black'}}>Step 1</span>  Make a Personal Account Registration :
                </b>
                <br /> Give us your name, email address, or WhatsApp number to
                become a customer of Essaygrad and receive discounts and
                negotiate prices. The next step is to build a password for your
                account and write it somewhere where you can find it later in
                case you forget it and confirm it by your email. <br />
                <br />{" "}
                <b className="text-primary">
                <span style={{color:'black'}}>Step 2</span>  Provide us with Instructions of your Essay :
                </b>{" "}
                <br /> After you have finished setting up your account, you can
                click on "Write my Assignment" directly from your dashboard. To
                provide more information about your assignment, please complete
                the short form. <br />
                <br />{" "}
                <b className="text-primary">
                <span style={{color:'black'}}>Step 3</span>  Choose a Professional Writer :
                </b>{" "}
                <br /> Select a writer based on their rating and success record.
                Simply chat with our Writer, "I want my essay," and then the
                writer will start writing your essay based on your detailed form
                or by your specific instructions on chat. <br />
                <br />{" "}
                <b className="text-primary">
                <span style={{color:'black'}}>Step 4</span>  Share Any Last-Minute Requirements :
                </b>{" "}
                <br /> You neglected to include a crucial detail in your "write
                my Assignment" request. No issue! Use the direct chat function to
                get in touch with the chosen writer and offer any last-minute
                instructions you may have for your article, essay or blog. Our
                experts will always consider all of your suggestions at any
                time. <br />
                <br /> <b className="text-primary">
                <span style={{color:'black'}}>Step 5</span>  Keep in Touch :
                </b> <br /> Contact the allocated expert frequently if you need
                throughout the order process. Additionally, you may follow the
                progress, provide extra specifications, or ask questions in the
                chat window with your writer. <br /> <br />
                <b className="text-primary">
                <span style={{color:'black'}}>Step 6</span>  Receive Your Ideal Paper right away :
                </b>{" "}
                <br /> When the order is finished, a message will appear in your
                mailbox. If you want to be sure the expert followed all of your
                instructions, you can download the finished product's preview.
                If you are happy with the results, only pay for your order. And
                if there is anything that needs to be corrected or changed,
                don't hesitate to ask for changes or edits. That is how simple
                it is to receive assistance from us!
              </p>
              {/* Continue to add all your content here */}
            </Card.Body>
          {/* </Col> */}

          {/* <Col>
            {" "}
            <Card.Body>
              <p
                className="p-4 rounded-4"
                style={{ border: "1px solid  #0d6efd" }}
              >
                <b>Make a Personal Account Registration -</b> Give us your name,
                email address, or WhatsApp number to become a customer of
                Essaygrad and receive discounts and negotiate prices. The next
                step is to build a password for your account and write it
                somewhere where you can find it later in case you forget it and
                confirm it by your email. <br />
                <br /> <b>Provide us with Instructions of your Essay -</b> After
                you have finished setting up your account, you can click on
                "Write my Assignment" directly from your dashboard. To provide
                more information about your assignment, please complete the
                short form. <br />
                <br /> <b>Choose a Professional Writer -</b> Select a writer
                based on their rating and success record. Simply chat with our
                Writer, "I want my essay," and then the writer will start
                writing your essay based on your detailed form or by your
                specific instructions on chat. <br />
                <br /> <b>Share Any Last-Minute Requirements -</b> You neglected
                to include a crucial detail in your "write my Assignment" request.
                No issue! Use the direct chat function to get in touch with the
                chosen writer and offer any last-minute instructions you may
                have for your article, essay or blog. Our experts will always
                consider all of your suggestions at any time. <br />
                <br /> <b>Keep in Touch -</b>Contact the allocated expert
                frequently if you need throughout the order process.
                Additionally, you may follow the progress, provide extra
                specifications, or ask questions in the chat window with your
                writer. <br />
                <br /> <b>Receive Your Ideal Paper right away</b> When the order
                is finished, a message will appear in your mailbox. If you want
                to be sure the expert followed all of your instructions, you can
                download the finished product's preview. If you are happy with
                the results, only pay for your order. And if there is anything
                that needs to be corrected or changed, don't hesitate to ask for
                changes or edits. That is how simple it is to receive assistance
                from us!
              </p>
            </Card.Body>
          </Col> */}
        {/* </Row> */}
      </Card>
    </Container>
  );
};

export default ScrollableBox;
