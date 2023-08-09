import { Col, Container, ModalTitle, Row } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import "../App.css";

function FAQ() {
  return (
    <div
      style={{ paddingTop: "4rem", paddingBottom: "3rem" }}
      className=" ourbg  d-flex align-items-center justify-content-center flex-column"
    >
      <h2 className="text-center p-2">
        <strong>Frequently Asked Questions</strong>{" "}
      </h2>
      {/* <h1 className="d-block d-sm-none"><strong>FAQs</strong> </h1> */}
      <Container className="mt-2 p-sm-5">
        <Row className="mt-2 d-flex flex-column flex-sm-row">
          <Col>
            {" "}
            <Accordion defaultActiveKey="none" style={{ color: "green" }}>
              <Accordion.Item
                eventKey="0"
                className="mb-3 p-sm-3  rounded-4 shadow faq"
              >
                <Accordion.Header>
                  {" "}
                  <b>How quickly can your Essay writers help?</b>{" "}
                </Accordion.Header>
                <Accordion.Body>
                The minimum time required by our writers to complete a short essay is 3 hrs. If you need a more descriptive lengthy essay then you can directly chat with our writers and get an estimate of analysis and writing time and finally get your written masterpiece.

                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item
                eventKey="1"
                className="mb-3 p-sm-3  rounded-4 shadow faq"
              >
                <Accordion.Header>
                  {" "}
                  <b>
                  Do you provide essay writing services for any essay subject?

                  </b>{" "}
                </Accordion.Header>
                <Accordion.Body>
                Definitely! We have an expert team of essay writers who are experts in multiple subjects which includes technical subjects like physics, chemistry, economics, Information technology, engineering and many more.

                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item
                eventKey="2"
                className="mb-3 p-sm-3  rounded-4 shadow faq"
              >
                <Accordion.Header>
                  {" "}
                  <b>
                  Does this essay writing service is legitimate?

                  </b>{" "}
                </Accordion.Header>
                <Accordion.Body>
                Of course! Our essay writing service is legitimate and has benefited hundreds of students and the number of students is still increasing day by day. You can go through reviews to see our success rate
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
          <Col>
            {" "}
            <Accordion defaultActiveKey="none">
              <Accordion.Item
                eventKey="0"
                className="mb-3 p-sm-3  rounded-4 shadow faq"
              >
                <Accordion.Header>
                  {" "}
                  <b>
                  How much does Essaygrad cost?
                  </b>{" "}
                </Accordion.Header>
                <Accordion.Body>
                Compared to other essay writing services, our pricing are the most reasonable and affordable, starting at just $10 per page. Prices depend on the number of pages and the deadline of the assignment. Also if there are a large number of pages then you can negotiate prices with the writers to get a good deal.

                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item
                eventKey="1"
                className="mb-3 p-sm-3  rounded-4 shadow faq"
              >
                <Accordion.Header>
                  {" "}
                  <b>
                  Does Essaygrad writing services are plagiarism free?

                  </b>{" "}
                </Accordion.Header>
                <Accordion.Body>
                Absolutely! All the Assignments are written by our professional writers from scratch and it is verified by numerous tools to avoid any kind of plagiarism.

                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item
                eventKey="2"
                className="mb-3 p-sm-3  rounded-4 shadow faq"
              >
                <Accordion.Header>
                  {" "}
                  <b>
                  Is ordering from Essaygrad safe?

                  </b>{" "}
                </Accordion.Header>
                <Accordion.Body>
                There is no need to worry about payment, as all the payments are protected. Our Payment is verified by MasterCard, Discovery, Visa and American Express. We do not have any access to your data as well as we offer a money-back guarantee.

                </Accordion.Body>
              </Accordion.Item>
              
            </Accordion>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default FAQ;
