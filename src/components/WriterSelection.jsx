import React, { useState } from "react";
import { Select } from "antd";
import writers from "../constants/writers";
import WriterProfileCard from "./WriterProfileCard";
import WriterBio from "./WriterBio";

const { Option } = Select;

const WriterSelection = () => {
  const [selectedWriter, setSelectedWriter] = useState(null);

  // Mocked list of writers for this example.
  // This list could be fetched from an API endpoint.
  // const writers = [
  //   { id: 1, name: 'Writer 1', specialization: 'English' },
  //   { id: 2, name: 'Writer 2', specialization: 'Math' },
  //   { id: 3, name: 'Writer 3', specialization: 'History' },
  //   // ...add more writers as needed
  // ];

  const handleWriterChange = (writerId) => {
    setSelectedWriter(writerId);
    // Perform any additional logic when a writer is selected
  };

  return (
    <div className="text-center">
      {/* <h2 htmlFor="writer">Select Writer</h2> */}
      <div
        id="writer"
        onChange={handleWriterChange}
        value={selectedWriter}
        className="mt-4 d-flex flex-wrap justify-content-center
        "
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
    </div>
  );
};

export default WriterSelection;
