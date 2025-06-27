import React from 'react';
import './waste.css';

const services = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=250&fit=crop",
    title: "Residential Waste And Recycling Services",
    description: "We've been providing household waste removal and recycling services for more than 30 years. Contact us for reliable and efficient waste management solutions for your home."
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=400&h=250&fit=crop",
    title: "Commercial Waste And Collection Services",
    description: "We offer our commercial customers reliable and cost-effective waste management solutions. Let us handle all your business waste disposal needs with professional service."
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1604187351574-c75ca79f5807?w=400&h=250&fit=crop",
    title: "Retail And Institutional Collection Services",
    description: "We provide efficient commercial waste solutions for retail stores and institutional facilities. Trust us for reliable waste management services tailored to your specific needs."
  }
];

const WasteCollectionServices = () => {
  return (
    <div className="container py-5  font-sans ">
      {/* Header */}
      <div className="text-center mb-5">
        <p className="text-warning text-uppercase fw-semibold small mb-1">
          San Jose Portable Waste Collection Service
        </p>
        <h2 className="fw-bold text-dark">
          Devoted & Trustworthy Waste Collection Services
        </h2>
      </div>

      {/* Cards */}
      <div className="row justify-content-center g-4 mb-5">
        {services.map((service) => (
          <div key={service.id} className="col-md-4">
            <div className="card h-100 shadow-sm service-card">
              <img src={service.image} className="card-img-top fixed-height-img" alt={service.title} />
              <div className="card-body text-center">
                <h5 className="card-title fw-bold">{service.title}</h5>
                <p className="card-text text-muted">{service.description}</p>
                <button className="btn btn-success explore-btn">Explore More ➤</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="text-center">
        <p className="text-muted">
          Need Our Waste Collection Service Provider?{' '}
          <strong className="footer-link">Request A Quote</strong>
        </p>
      </div>
    </div>
  );
};

export default WasteCollectionServices;
