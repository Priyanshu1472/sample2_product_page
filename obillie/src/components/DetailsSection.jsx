import React, { useState } from 'react';
import { Heart} from 'lucide-react';
import '../styles/DetailsSection.css'; // Assuming you have a CSS file for styling

const DetailsSection = () => {
    const [selectedSize, setSelectedSize] = useState('');
    const [isWishlisted, setIsWishlisted] = useState(false);
  
    const sizes = ['XS', 'S', 'M', 'L', 'XL'];
    
    // const productDetails = [
    //   'Dry clean only',
    //   'Model is 175 cms tall and is wearing an XS',
    //   'White with colorful motifs',
    //   'Limited to just 10 pieces Worldwide',
    //   'Premium handwoven Jamdani fabric'
    // ];
  
    return (
      <div className="details-section">
        <div className="product-info">
          <h1 className="product-title">NYRA</h1>
          <p className="product-type">Halter Top</p>
          <p className="product-price">₹ 999</p>
        </div>
  
        <div className="product-description">
          <p>
            A modern silhouette. The Nyra top is a halter cut that dares to bare - elegantly. 
            Crafted in handwoven Jamdani with its delicate motifs and featherlight feel, it 
            wraps the body with intention while leaving just enough to the imagination. It's a 
            piece that turns heads on rooftops, warm nights, or date-lit terraces. Think 
            heritage, reimagined for the bold.
          </p>
        </div>
  
        <div className="size-selection">
          <h3>Select Size</h3>
          <div className="size-buttons">
            {sizes.map((size) => (
              <button
                key={size}
                className={`size-btn ${selectedSize === size ? 'selected' : ''}`}
                onClick={() => setSelectedSize(size)}
              >
                {size}
              </button>
            ))}
          </div>
        </div>
  
        {/* <div className="product-details">
          <h3>Details & Care</h3>
          <ul>
            {productDetails.map((detail, index) => (
              <li key={index}>{detail}</li>
            ))}
          </ul>
        </div> */}
  
        <div className="action-buttons">
          <button className="add-to-cart-btn">
            Add to Cart
          </button>
          <button 
            className={`wishlist-btn ${isWishlisted ? 'active' : ''}`}
            onClick={() => setIsWishlisted(!isWishlisted)}
          >
            <Heart size={20} fill={isWishlisted ? '#ff6b6b' : 'none'} />
          </button>
        </div>
      </div>
    );
  };
  
  export default DetailsSection;