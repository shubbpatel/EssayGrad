import React, { useState } from "react";
// import { getStripePayments } from "@stripe/firestore-stripe-payments";
import { loadStripe } from "@stripe/stripe-js";
import {app, auth} from '../firebase';
import { getFirestore } from "firebase/firestore";
// import db from "../firebase";


const stripePromise = loadStripe("pk_test_51NEuGzSIhIcfHwEyCIVEmY2jQxuObxWnyWFKG1DnBjutAz6B7FTasqn5tmfmbMpBj0z6kE0IDv8QXxAZXadWOfVM00umL7Rykl");

const Payment = () => {
  const [amount, setAmount] = useState("");
  const currentUser = auth.currentUser;
  const db = getFirestore(app);
// console.log(db)
  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  const handleCheckout = async () => {
    // Convert amount to cents
    const amountInCents = Math.round(amount * 100);

    // Create a new checkout session in Firestore
    if (currentUser) {
      const docRef = await db
        .collection("customers")
        .doc(currentUser.uid) // Replace with your method to get current user's uid
        .collection("checkout_sessions")
        .add({
          mode: "payment",
          line_items: [
            {
              price_data: {
                currency: "usd",
                product_data: {
                  name: "Custom Amount",
                },
                unit_amount: amountInCents,
              },
              quantity: 1,
            },
          ],
          success_url: window.location.origin,
          cancel_url: window.location.origin,
        });

      // Wait for the Checkout Session to get attached by your Cloud Function
      docRef.onSnapshot(async (snap) => {
        const { error, sessionId } = snap.data();

        if (error) {
          alert(error.message);
        }
        if (sessionId) {
          // We have a session, let's redirect to Checkout
          const stripe = await stripePromise;
          stripe.redirectToCheckout({ sessionId });
        }
      });
    } else {
      alert("please log in first");
    }
  };

  return (
    <div>
      <input type="number" value={amount} onChange={handleAmountChange} />
      <button onClick={handleCheckout}>Checkout</button>
    </div>
    
  );
};

export default Payment;


