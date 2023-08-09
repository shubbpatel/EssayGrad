import React from "react";
import MyNavbar from "../components/MyNavbar";
import AboutWriter from "../components/aboutwriter";
import { Container } from "react-bootstrap";
import WriterServiceCard from "../components/WriterServiceCard";
import WriterProfileReview from "../components/WriterProfileReview";

export default function WriterProfilePage() {
  return (
    <div>
      <MyNavbar />
      <Container className="pt-3">
        <div className="d-flex flex-row justify-content-between">
          <div
            style={{
              maxWidth: "700px",
              width: "95vw",
            }}
          >
            <AboutWriter />
          </div>
          <div>
            <WriterServiceCard />
          </div>
        </div>
        <div>
            <WriterProfileReview/>
        </div>
      </Container>
    </div>
  );
}
