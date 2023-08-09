import React, { useState, useEffect } from "react";
import { Card, Form } from "react-bootstrap";

const writingTypes = ["Essay", "Blog", "Article"];
const institutions = ["School", "College", "University", "Own Website"];
const deadlines = [
  "1 day",
  "2 days",
  "3 days",
  "4 days",
  "5 days",
  "6 days",
  "10 days",
  "2 weeks",
];
const pages = [
  "1 page/ 275 words",
  "2 pages/ 550 words",
  "3 pages/ 825 words",
  "4 pages/ 1100 words",
  "5 pages/ 1375 words",
  "6 pages/ 1650 words",
  "7 pages/ 1925 words",
  "8 pages/ 2200 words",
  "9 pages/ 2475 words",
  "10 pages/ 2750 words",
];
const spacingOptions = ["Double", "Single"];

const typePrice = { Essay: 10, Blog: 15, Article: 20 };
const institutionPrice = {
  School: 0,
  College: 5,
  University: 10,
  "Own Website": 15,
};
const deadlineMultiplier = {
  "1 day": 2.0,
  "2 days": 1.8,
  "3 days": 1.6,
  "4 days": 1.4,
  "5 days": 1.2,
  "6 days": 1.1,
  "10 days": 1.0,
  "2 weeks": 0.9,
};

const PriceCalculator = () => {
  const [writingType, setWritingType] = useState(writingTypes[0]);
  const [institution, setInstitution] = useState(institutions[0]);
  const [deadline, setDeadline] = useState(deadlines[0]);
  const [page, setPage] = useState(pages[0]);
  const [spacing, setSpacing] = useState(spacingOptions[0]);
  const [displayPages, setDisplayPages] = useState(pages);

  useEffect(() => {
    const newPages = pages.map((page) => {
      const [pageNum, , wordCount] = page.split(" ");
      const newWordCount =
        spacing === "Single" ? parseInt(wordCount) * 2 : parseInt(wordCount);
      return `${pageNum} / ${newWordCount} words`;
    });
    setDisplayPages(newPages);
  }, [spacing]);

  const calculatePrice = () => {
    const basePrice = typePrice[writingType] + institutionPrice[institution];
    const deadlineFactor = deadlineMultiplier[deadline];
    const pageCount = parseInt(page.split(" ")[0]);
    const price = basePrice * deadlineFactor * pageCount;
    return spacing === "Single" ? price * 2 : price;
  };

  return (
    <div>
      <Card className="p-3 rounded-4 " style={{width:'18rem'}}>
        <Card.Title> Estimate the Price</Card.Title>
        <Form>
          <Form.Select
            className=""
            onChange={(e) => setWritingType(e.target.value)}
          >
            {writingTypes.map((type, index) => (
              <option className="p-3" key={index}>
                {type}
              </option>
            ))}
          </Form.Select>
          <Form.Select
            className=""
            onChange={(e) => setInstitution(e.target.value)}
          >
            {institutions.map((inst, index) => (
              <option className="p-3" key={index}>
                {inst}
              </option>
            ))}
          </Form.Select>
          <Form.Select
            className=""
            onChange={(e) => setDeadline(e.target.value)}
          >
            {deadlines.map((dl, index) => (
              <option className="p-3" key={index}>
                {dl}
              </option>
            ))}
          </Form.Select>
          <Form.Select className="" onChange={(e) => setPage(e.target.value)}>
            {displayPages.map((pg, index) => (
              <option className="p-3" key={index}>
                {pg}
              </option>
            ))}
          </Form.Select>
          <Form.Select
            className=""
            onChange={(e) => setSpacing(e.target.value)}
          >
            {spacingOptions.map((sp, index) => (
              <option className="p-3" key={index}>
                {sp}
              </option>
            ))}
          </Form.Select>
          
          <Form.Text><strong>Total Price: {calculatePrice()}</strong> </Form.Text>
        </Form>
      </Card>
    </div>
  );
};

export default PriceCalculator;
