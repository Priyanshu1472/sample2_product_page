import React, { useState, useRef, useEffect, useCallback } from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';
import '../styles/ImageSection.css';
import img1 from '../assets/images1.jpeg';
import img2 from '../assets/images2.jpeg';
import img3 from '../assets/images3.jpeg';
import img4 from '../assets/images.jpeg';

const ImageSection = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const thumbnailsRef = useRef(null);
  const touchStartY = useRef(0);
  const touchEndY = useRef(0);

  const productImages = [img1, img2, img3, img4, img1, img2, img3, img4];

  const scrollPosition = Math.max(0, Math.min(productImages.length - 3, currentImageIndex - 1));

  const handleThumbnailClick = (index) => {
    setCurrentImageIndex(index);
  };

  const handleScrollUp = useCallback(() => {
    setCurrentImageIndex((prev) => Math.max(0, prev - 1));
  }, []);

  const handleScrollDown = useCallback(() => {
    setCurrentImageIndex((prev) => Math.min(productImages.length - 1, prev + 1));
  }, [productImages.length]);

  const handleSwipe = useCallback(() => {
    const swipeThreshold = 50;
    const swipeDistance = touchStartY.current - touchEndY.current;

    if (Math.abs(swipeDistance) > swipeThreshold) {
      if (swipeDistance > 0) {
        handleScrollDown();
      } else {
        handleScrollUp();
      }
    }
  }, [handleScrollUp, handleScrollDown]);

  const handleTouchStart = useCallback((e) => {
    touchStartY.current = e.touches[0].clientY;
  }, []);

  const handleTouchMove = useCallback((e) => {
    e.preventDefault();
  }, []);

  const handleTouchEnd = useCallback((e) => {
    touchEndY.current = e.changedTouches[0].clientY;
    handleSwipe();
  }, [handleSwipe]);

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
  }, [handleTouchStart, handleTouchMove, handleTouchEnd]);

  return (
    <div className="image-section">
      {/* Thumbnail Images */}
      <div
        className="thumbnails-container"
        ref={thumbnailsRef}
        style={{ touchAction: 'pan-y' }}
      >
        <div
          className="thumbnails-wrapper"
          style={{ transform: `translateY(-${scrollPosition * 90}px)` }}
        >
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

      {/* Custom Scroll Bar */}
      <div className="custom-scrollbar">
        <button className="scroll-btn" onClick={handleScrollUp}>
          <ChevronUp size={16} />
        </button>
        <div className="scroll-track">
          <div
            className="scroll-thumb"
            style={{
              top: `${(currentImageIndex / Math.max(1, productImages.length - 1)) * 60}%`,
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