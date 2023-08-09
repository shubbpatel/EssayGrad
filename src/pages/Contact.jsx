import React from "react";
import data from "../constants/contactUsContent";

export default function Contact() {
  return (
    <div className="p-4 d-flex align-items-center justify-content-center">
      <div className="text-dark" style={{ maxWidth: "1000px", width: "95vw" }}>
        <p>
          We value your interest in Essay Grad and are dedicated to your
          first-rate help and support. Contacting us is easy, and we offer
          several convenient channels for you to reach out to us:
        </p>
        <br />
        <h3>Email</h3>
        <p>
          Send us an email at{" "}
          <a href="mailto:support@essaygrad.com">support@essaygrad.com</a> with
          your question, and our committed customer service team will get back
          to you right away.. Whether you have a question, need help with an
          order, or require clarification about our services, we're here to
          assist you. Expect a detailed and personalised response within 24
          hours, Monday through Friday.
        </p>
        <br />
        <h3>Live Chat Assistance</h3>
        <p>
          Our website offers a handy live chat option if you prefer real-time
          conversation. Simply visit{" "}
          <a href="https://www.essaygrad.com">https://www.essaygrad.com</a> and
          look for the chat icon. Click on it, and you'll be connected with a
          dedicated support representative who will assist you promptly. Our
          live chat support is available during our office hours, ensuring that
          you receive immediate attention and solutions to your queries.
        </p>
        <br />
        <h3>Our Service Area</h3>
        <div className="p-4">
          <table>
            <thead>
              <tr>
                <th>City</th>
                <th>Pin Code</th>
                <th>State</th>
                <th>Country</th>
              </tr>
            </thead>
            <tbody>
              {data.map((row, index) => (
                <tr key={index}>
                  <td>{row.city}</td>
                  <td>{row.pinCode}</td>
                  <td>{row.state}</td>
                  <td>{row.country}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <br />
        <h3>Social Media</h3>
        <p>
          Our active presence across a number of social media channels makes it
          easy to stay in touch. Follow us on [insert social media platforms and
          handles] to stay updated on the latest news, informative writing tips,
          and exclusive offers. You can also message us directly, and we'll get
          back to you as soon as we can. Live Chat Assistance
        </p>
        <p>
          {" "}
          Our website offers a handy live chat option if you prefer real-time
          conversation.We value your feedback and engagement, and we're excited
          to connect with you in this dynamic online space.
        </p>
        <br />
        <h3>Feedback and Suggestions</h3>
        <p>
          We value your opinions greatly as we work tirelessly to suit your
          needs and enhance our services.. If you have any suggestions,
          comments, or ideas on how we can enhance your experience with Essay
          Grad, we invite you to share them with us. Email us at 
          <a href="mailto:support@essaygrad.com"> support@essaygrad.com</a> if you would like to. Your opinions are
          extremely important in guiding our continued efforts to give you the
          best service possible.
        </p>
        <p>
          At Essay Grad, we are committed to your satisfaction, academic
          success, and overall positive experience. We are here to accompany you
          during every step of your academic journey because we recognise how
          important it is. Please don't hesitate to contact us through your
          preferred communication channel, and we will be more than happy to
          assist you.
        </p>
      </div>
    </div>
  );
}
