import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './wasteintro.css';

const WasteIntro = () => {
  return (
    <Container fluid className="py-5 bg-light">
      <Row className="align-items-center justify-content-center">
        {/* Left Image */}
        <Col md={5} className="mb-4 mb-md-0">
          <img
            src="https://media.gettyimages.com/photos/garbage-collector-asian-worker-of-urban-municipal-recycling-garbage-picture-id1178691814?k=20&m=1178691814&s=612x612&w=0&h=emMWF8LnvmG2KTJzgOGXpUNZYDBHPiUmiQtijRzxtDQ="
            alt="Waste Management"
            className="img-fluid rounded shadow-sm"
          />
        </Col>

        {/* Right Content */}
        <Col md={6}>
          <h2 className="fw-bold text-dark mb-4 lh-base">
            Transforming Trash into Opportunity.<br />
            Sustainable Solutions for Every Sector.<br />
            Trusted by Communities Nationwide.
          </h2>

          <p className="text-muted mb-4">
            At TrashCo, we go beyond simple waste disposal. Our innovative systems
            ensure safe, eco-friendly collection, segregation, and recycling of waste
            for residential, commercial, and institutional clients alike.
          </p>

          <div className="d-flex gap-3 mb-4">
            <Button variant="success">Get a Quote</Button>
            <Button variant="outline-secondary">Learn More</Button>
          </div>

          <ul className="text-muted list-unstyled">
            <li>✅ Daily & Weekly Pickups Available</li>
            <li>✅ GPS Tracked Collection Vehicles</li>
            <li>✅ Segregated Recycling Bins Provided</li>
            <li>✅ Government & Industry Certified</li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default WasteIntro;
