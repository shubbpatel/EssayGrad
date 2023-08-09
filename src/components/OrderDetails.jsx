import React, { useState } from "react";
import { Form, Button, Input, Col } from "react-bootstrap";
import { DatePicker, Select, InputNumber } from "antd";
import { auth } from "../firebase";
import * as Yup from "yup";
import emailjs from "emailjs-com";
import subjects from "../constants/subjects";

const { Option } = Select;

const OrderDetails = () => {
  const validationSchema = Yup.object().shape({
    topic: Yup.string().required("Topic is required"),
    subject: Yup.string().required("Subject is required"),
    deadline: Yup.date().required("Deadline is required").nullable(),
    instructions: Yup.string().required("Instructions are required"),
    pageCount: Yup.number()
      .required("Page count is required")
      .min(0, "Page count must be at least 1"),
  });
  const cUser = auth.currentUser;

  const initialValues = {
    topic: "",
    subject: "",
    deadline: "",
    instructions: "",
    pageCount: "",
    email: cUser ? cUser.email : "",
  };

  const [formValues, setFormValues] = useState(initialValues);
  const [errors, setErrors] = useState({});

  const handleSubmit = async () => {
    try {
      await emailjs.send(
        "service_jmsj315",
        "template_mx0bgns",
        formValues,
        "otLa5OVfisTXjCZPZ"
      );

      console.log("Email sent successfully!");
      console.log(formValues);
    } catch (error) {
      console.error("Error sending email:", error);
    }
  };

  const handleChange = (fieldName, value) => {
    setFormValues((prevValues) => ({
      ...prevValues,
      [fieldName]: value,
    }));
  };

  const validateField = async (fieldName, value) => {
    try {
      await validationSchema.validateAt(fieldName, { [fieldName]: value });
      setErrors((prevErrors) => ({ ...prevErrors, [fieldName]: "" }));
    } catch (error) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [fieldName]: error.message,
      }));
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    // Validate all fields before submitting
    try {
      await validationSchema.validate(formValues);

      // No errors, proceed with form submission
      handleSubmit();
    } catch (error) {
      const fieldErrors = {};

      // Update field errors object
      error.inner.forEach((fieldError) => {
        fieldErrors[fieldError.path] = fieldError.message;
      });

      setErrors(fieldErrors);
    }
  };

  return (
    <div className="p-sm-4 w-100">
      <Col md={6}>
      <Form onSubmit={handleFormSubmit}>
        <input
          type="text"
          name="email"
          value={formValues.email}
          onChange={(e) => handleChange("email", e.target.value)}
          className="invisible"
        />
        <Form.Group className="mb-3">
          <Form.Label>Essay Topic</Form.Label>
          <Form.Control
            type="text"
            value={formValues.topic}
            onChange={(e) => handleChange("topic", e.target.value)}
            onBlur={() => validateField("topic", formValues.topic)}
            placeholder="Enter essay topic"
          />
          {errors.topic && (
            <span className="text-danger" style={{ fontSize: "14px" }}>
              fill valid information
            </span>
          )}
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Subject</Form.Label>
          <br />
          <Select
            value={formValues.subject}
            onChange={(value) => handleChange("subject", value)}
            onBlur={() => validateField("subject", formValues.subject)}
            className="w-100 ml-2"
          >
            {/* <Option value="Other">Other</Option> */}

            {subjects.map((sub, index) => (
              <Option value={sub} key={index}>
                {sub}
              </Option>
            ))}
            {/* <Option value="english">English</Option>
            <Option value="history">History</Option> */}
          </Select>
          {errors.subject && (
            <span className="text-danger" style={{ fontSize: "14px" }}>
              fill valid information
            </span>
          )}
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Deadline</Form.Label>
          <Form.Control
            type="date"
            value={formValues.deadline}
            onChange={(e) => handleChange("deadline", e.target.value)}
            onBlur={() => validateField("deadline", formValues.deadline)}
            className="form-control"
          />
          {errors.deadline && (
            <span className="text-danger" style={{ fontSize: "14px" }}>
              fill valid information
            </span>
          )}
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Instructions</Form.Label>
          <Form.Control
            as="textarea"
            value={formValues.instructions}
            onChange={(e) => handleChange("instructions", e.target.value)}
            onBlur={() =>
              validateField("instructions", formValues.instructions)
            }
            placeholder="Enter instructions"
          />
          {errors.instructions && (
            <span className="text-danger" style={{ fontSize: "14px" }}>
              fill valid information
            </span>
          )}
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Page Count</Form.Label>
          <br />
          <InputNumber
            value={formValues.pageCount}
            onChange={(value) => handleChange("pageCount", value)}
            onBlur={() => validateField("pageCount", formValues.pageCount)}
            min={0}
            placeholder="Enter page count"
          />
          {errors.pageCount && (
            <span className="text-danger" style={{ fontSize: "14px" }}>
              fill valid information
            </span>
          )}
        </Form.Group>

        <Button type="submit">Submit</Button>
      </Form>
      </Col>

    </div>
  );
};

export default OrderDetails;
