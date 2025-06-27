import React from 'react';
import ImageSection from './ImageSection';
import DetailsSection from './DetailsSection';
import '../styles/ProductPage.css'; // Assuming you have a CSS file for styling

// Main Product Page Component
const ProductPage = () => {
  return (
    <div className="product-page">
      <div className="background-container">
        <div className="product-container">
          <ImageSection />
          <DetailsSection />
        </div>
      </div>
    </div>
  );
};

export default ProductPage;