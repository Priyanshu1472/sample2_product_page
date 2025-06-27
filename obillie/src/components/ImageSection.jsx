import React, { useState, useRef, useEffect } from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';
import '../styles/ImageSection.css'; // Assuming you have a CSS file for styling
import img1 from '../assets/image1.png'
import img2 from'../assets/image2.png';

const ImageSection = ({ images }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [scrollPosition, setScrollPosition] = useState(0);
    const thumbnailsRef = useRef(null);
    const touchStartY = useRef(0);
    const touchEndY = useRef(0);
  
    // Mock images data
    const productImages = [img1, img2, img1, img2, img1, img2, img1, img2];
  
    const handleThumbnailClick = (index) => {
      setCurrentImageIndex(index);
    };
  
    const handleScrollUp = () => {
      setScrollPosition(Math.max(0, scrollPosition - 1));
    };
  
    const handleScrollDown = () => {
      setScrollPosition(Math.min(productImages.length - 3, scrollPosition + 1));
    };

    // Touch event handlers
    const handleTouchStart = (e) => {
      touchStartY.current = e.touches[0].clientY;
    };

    const handleTouchMove = (e) => {
      // Prevent default scrolling behavior
      e.preventDefault();
    };

    const handleTouchEnd = (e) => {
      touchEndY.current = e.changedTouches[0].clientY;
      handleSwipe();
    };

    const handleSwipe = () => {
      const swipeThreshold = 50; // Minimum distance for a swipe
      const swipeDistance = touchStartY.current - touchEndY.current;

      if (Math.abs(swipeDistance) > swipeThreshold) {
        if (swipeDistance > 0) {
          // Swiped up - scroll down in thumbnails
          handleScrollDown();
        } else {
          // Swiped down - scroll up in thumbnails
          handleScrollUp();
        }
      }
    };

    // Add touch event listeners
    useEffect(() => {
      const thumbnailsElement = thumbnailsRef.current;
      
      if (thumbnailsElement) {
        thumbnailsElement.addEventListener('touchstart', handleTouchStart, { passive: true });
        thumbnailsElement.addEventListener('touchmove', handleTouchMove, { passive: false });
        thumbnailsElement.addEventListener('touchend', handleTouchEnd, { passive: true });

        return () => {
          thumbnailsElement.removeEventListener('touchstart', handleTouchStart);
          thumbnailsElement.removeEventListener('touchmove', handleTouchMove);
          thumbnailsElement.removeEventListener('touchend', handleTouchEnd);
        };
      }
    }, [scrollPosition]);
  
    return (
      <div className="image-section">
        {/* Thumbnail Images */}
        <div 
          className="thumbnails-container" 
          ref={thumbnailsRef}
          style={{ touchAction: 'pan-y' }}
        >
          <div className="thumbnails-wrapper" style={{ transform: `translateY(-${scrollPosition * 90}px)` }}>
            {productImages.map((image, index) => (
              <div
                key={index}
                className={`thumbnail ${index === currentImageIndex ? 'active' : ''}`}
                onClick={() => handleThumbnailClick(index)}
              >
                <img src={image} alt={`Product ${index + 1}`} />
              </div>
            ))}
          </div>
        </div>
  
        {/* Main Image */}
        <div className="main-image-container">
          <div className="main-image">
            <img src={productImages[currentImageIndex]} alt="Main Product" />
          </div>
          
          {/* Pagination Dots */}
          <div className="pagination-dots">
            {productImages.map((_, index) => (
              <button
                key={index}
                className={`dot ${index === currentImageIndex ? 'active' : ''}`}
                onClick={() => setCurrentImageIndex(index)}
              />
            ))}
          </div>
        </div>
  
        {/* Creative Scroll Bar */}
        <div className="custom-scrollbar">
          <button className="scroll-btn" onClick={handleScrollUp}>
            <ChevronUp size={16} />
          </button>
          <div className="scroll-track">
            <div 
              className="scroll-thumb"
              style={{ 
                top: `${(scrollPosition / Math.max(1, productImages.length - 3)) * 60}%` 
              }}
            />
          </div>
          <button className="scroll-btn" onClick={handleScrollDown}>
            <ChevronDown size={16} />
          </button>
        </div>
      </div>
    );
  };

  export default ImageSection;