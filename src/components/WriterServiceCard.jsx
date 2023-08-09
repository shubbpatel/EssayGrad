import React from "react";

export default function WriterServiceCard() {
  return (
    <div className=" p-3 rounded-2" style={{border:'1px solid red', minHeight:'340px'}} >
      <h3 className="fw-bold">Free features included</h3>
      <ul>
        <li>Required formatting</li>
        <li>Title & Bibliography included</li>
        <li>Internal plagiarism check</li>
        <li>Unlimited revisions</li>
      </ul>
      <div className="d-flex flex-column">

      <button>Hire Dr</button>
      <button>Chat With</button>
      </div>
      <p>Discuss your task with Dr. Patricia PhD</p>
    </div>
  );
}
