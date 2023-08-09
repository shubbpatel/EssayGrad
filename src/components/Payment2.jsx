import React from 'react';
import { useSelector } from 'react-redux';

const PaymentStep = () => {
  const essayDetails = useSelector((state) => state.order.essayDetails);
  const selectedWriter = useSelector((state) => state.order.selectedWriter);

  return (
    <div>
      <h2>Step 3: Payment</h2>
      <div>
        <h3>Essay Details</h3>
        <p>Topic: {essayDetails.topic}</p>
        <p>Subject: {essayDetails.subject}</p>
        <p>Deadline: {essayDetails.deadline}</p>
        <p>Page Count: {essayDetails.pageCount}</p>
        <p>Instructions: {essayDetails.instructions}</p>
        <p>Price: {essayDetails.price}</p>
      </div>
      <div>
        <h3>Selected Writer</h3>
        <p>Name: {selectedWriter.name}</p>
        <p>Rating: {selectedWriter.rating}ss</p>
        {/* Add more writer details as needed */}
      </div>
      {/* Payment methods and checkout button */}
    </div>
  );
};

export default PaymentStep;
