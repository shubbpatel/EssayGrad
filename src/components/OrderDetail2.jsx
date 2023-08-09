import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setEssayDetailss } from "../constants/actions";
import { Select } from "antd";
import { Option } from "antd/es/mentions";
import subjects from "../constants/subjects";

const EssayDetailsStep = () => {
  const dispatch = useDispatch();
  const [essayDetails, setEssayDetails] = useState({
    topic: "",
    subject: "",
    deadline: "",
    pageCount: "",
    instructions: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEssayDetails({ ...essayDetails, [name]: value });
  };
  // This is a sample implementation and may not be suitable for a production environment.
  const calculatePriceBasedOnDetails = (essayDetails) => {
    // Sample pricing formula based on page count, subject, and deadline.
    let basePricePerPage = 10; // Price per page (you can adjust this as needed).
    let basePricePerPage2 = 7.5; // Price per page (you can adjust this as needed).
    let extraChargePerUrgency = 0.2; // Additional charge for urgent orders (20% of the base price).
    // let extraChargePerSubject = 0.1; // Additional charge based on the subject (10% of the base price).

    let totalPrice = basePricePerPage * essayDetails.pageCount;
    let totalPrice2 = basePricePerPage2 * essayDetails.pageCount;

    // Apply extra charge for urgency if the deadline is within 3 days.
    const deadlineDate = new Date(essayDetails.deadline);
    const currentDate = new Date();
    const timeDifferenceInDays = Math.ceil(
      (deadlineDate - currentDate) / (1000 * 60 * 60 * 24)
    );
    if (timeDifferenceInDays <= 3) {
      totalPrice += totalPrice * extraChargePerUrgency;
    } else if (timeDifferenceInDays > 3) {
      return totalPrice2;
    }

    // Apply extra charge based on the subject.
    // if (essayDetails.subject === 'Science') {
    //   totalPrice += totalPrice * extraChargePerSubject;
    // }

    // You can add more conditions and pricing factors as needed based on your specific business logic.

    return totalPrice;
  };

  const handleCalculatePrice = () => {
    // Calculate the order price based on essayDetails and dispatch an action
    // to update the Redux store with the calculated price.
    const price = calculatePriceBasedOnDetails(essayDetails); // Implement this function as per your pricing logic
    // const price = 12;
    dispatch(setEssayDetailss({ ...essayDetails, price }));
  };

  return (
    <div className="text-center p-sm-5">
      <h1>Provide your order deatils</h1>
      <form className="w-100 d-flex flex-column text-center">
        <div className="mt-3">
          <label className="fw-bold">Essay Topic</label>

          <input
            type="text"
            name="topic"
            value={essayDetails.topic}
            onChange={handleInputChange}
            placeholder="Essay Topic"
            className="p-2 m-2 rounded-2 skyBlueBorder"
            style={{ maxWidth: "350px", width: "95vw" }}
          />
          <br />
          <label className="fw-bold">Subject </label>
          <select
            name="subject"
            value={essayDetails.subject}
            onChange={handleInputChange}
            className="m-2 border-2 fs-6 skyBlueBorder"
          >
            {subjects.map((sub, index) => (
              <option value={sub} key={index} className="p-3">
                {sub}
              </option>
            ))}
          </select>
        </div>
        <div className="mt-2">
          <label className="fw-bold">Deadline</label>
          <input
            type="date"
            name="deadline"
            value={essayDetails.deadline}
            onChange={handleInputChange}
            placeholder="Deadline"
            className="p-2 skyBlueBorder m-2"
          />
          <label className="fw-bold">Page Count</label>
          <input
            type="number"
            name="pageCount"
            value={essayDetails.pageCount}
            onChange={handleInputChange}
            placeholder="Page Count"
            className="skyBlueBorder p-2 m-2"
          />
        </div>
        <label className="mt-3">
          <strong>Instructions</strong>
        </label>
        <textarea
          name="instructions"
          value={essayDetails.instructions}
          onChange={handleInputChange}
          placeholder="Instructions"
          className="rounded-2 skyBlueBorder mt-2 m-auto"
          style={{ maxWidth: "600px", width: "95vw", height: "100px" }}
          onClick={handleCalculatePrice}
        />
      </form>
      {/* <button className="btn-primary" onClick={handleCalculatePrice}>Calculate Price</button> */}
    </div>
  );
};

export default EssayDetailsStep;
