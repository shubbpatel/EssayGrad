import React from "react";

export default function WriterProfileReview() {
  return (
    <div
      className="p-2 rounded-2"
      style={{ border: "1px solid black", maxWidth: "900px", width: "95vw" }}
    >
      <h3 className="fw-bold">Rating and Reviews</h3>
      <div>
        <div className="p-2 rounded-1" style={{border:'1px solid black'}}>
          <div className="d-flex flex-row justify-content-between">
            <div>
              <span>dj</span>
              <p>customer</p>
            </div>
            <div>
              <span>Nursing</span>
              <p>Rating</p>
            </div>
          </div>
          <p>
            <h5>Exceptional</h5>
            hey bro
          </p>
        </div>
      </div>
    </div>
  );
}
