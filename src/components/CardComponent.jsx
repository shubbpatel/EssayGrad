import React from 'react';
import { Card } from 'react-bootstrap';

const CardComponent = () => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Paul T.</Card.Title>
        <Card.Text>100% Success Rate</Card.Text>
        <Card.Text>7261 Reviews</Card.Text>
        <Card.Text>14599 Finished orders</Card.Text>
        <Card.Text>Degree: Master’s</Card.Text>
        <Card.Text>
          Competences: Medicine and Health, Liberal Arts and Humanities, Business and Finance
        </Card.Text>
        <Card.Text>About writer</Card.Text>
        <Card.Text>Rating icon</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default CardComponent;
