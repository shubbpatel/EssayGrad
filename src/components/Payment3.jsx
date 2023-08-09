import React, { useState, useEffect, useRef } from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { useSelector } from 'react-redux';
import writers from "../constants/writers";

const Payment3 = () => {
  const [price, setPrice] = useState(10);
  const paypalConfig = {
    currency: "USD",
    clientId:
      "AbLz9IBwTLz1TBhldyMUVl8bSP5zE9J0pjAiHp-GCeL17rlEIvaRPfkVLlVWp6paGuhWMmPgkZnNNwvU",
  };
  const essayDetails = useSelector((state) => state.order.essayDetails);
  const selectedWriter = useSelector((state) => state.order.selectedWriter);
  const [pickedWirter, setPickedWriter] = useState(null);

 useEffect(()=>{
for (const writer of writers) {
  if(writer.id === selectedWriter){
    setPickedWriter(writer)
  }
}
 },[])
  const priceRef = useRef(price); // Create a ref to hold the current value of price

  useEffect(() => {
    // Update the ref value whenever the price state changes
    setPrice(essayDetails.price)
    priceRef.current = price;
  }, [price]);

  const createOrder = (data, actions) => {
    // Use the ref value as the current price in the createOrder function
    const formattedAmount = priceRef.current;
    if (formattedAmount <= 0) {
      console.error("Invalid amount:", formattedAmount);
      return;
    }

    return actions.order.create({
      purchase_units: [
        {
          amount: {
            currency_code: "USD",
            value: formattedAmount,
          },
        },
      ],
    });
  };

  const onApprove = (data, actions) => {
    return actions.order.capture().then(function (details) {
      // Handle successful payment here if needed
      console.log(details);
    });
  };
  console.log(essayDetails);

  // Ensure the price state is updated whenever the input changes
  // const handlePriceChange = (e) => {
  //   setPrice(e.target.value);
  // };

  return (
    <div>
      {/* <input type="text" value={price} onChange={handlePriceChange} /> */}
      <div>
      {/* <h2>Step 3: Payment</h2> */}
      <div>
        <h3>Order Summary</h3>
        <p>Topic: {essayDetails.topic}</p>
        <p>Subject: {essayDetails.subject}</p>
        <p>Deadline: {essayDetails.deadline}</p>
        <p>Page Count: {essayDetails.pageCount}</p>
        <p>Instructions: {essayDetails.instructions}</p>
        <p>Price: $ {essayDetails.price}</p>
      </div>
      <div>
        <h3>Selected Writer</h3>
        <p>Name: {pickedWirter? pickedWirter.name : ''}</p>
        <p>{console.log(pickedWirter)}</p>
        {/* <p>Rating: {selectedWriter.rating}</p> */}
        {/* Add more writer details as needed */}
      </div>
      {/* Payment methods and checkout button */}
    </div>
      <PayPalScriptProvider options={paypalConfig}>
        <PayPalButtons
          createOrder={(data, actions) => createOrder(data, actions)}
          onApprove={(data, actions) => onApprove(data, actions)}
        />
      </PayPalScriptProvider>
    </div>
  );
};

export default Payment3;
