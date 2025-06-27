import React, { useState } from 'react';
import { Heart, ShoppingCart, User } from 'lucide-react';
import '../styles/ActionIcons.css'; // Assuming you have a CSS file for styling

// Logo Component
const ActionIcons = () => {
    const [heartCount, setHeartCount] = useState(0);
    const [cartCount, setCartCount] = useState(0);
  
    return (
      <div className="action-icons">
        <div className="icon-wrapper" onClick={() => setHeartCount(heartCount + 1)}>
          <Heart className="icon heart-icon" size={24} />
          {heartCount > 0 && <span className="badge">{heartCount}</span>}
        </div>
        
        <div className="icon-wrapper" onClick={() => setCartCount(cartCount + 1)}>
          <ShoppingCart className="icon cart-icon" size={24} />
          {cartCount > 0 && <span className="badge">{cartCount}</span>}
        </div>
        
        <div className="icon-wrapper">
          <User className="icon profile-icon" size={24} />
        </div>
      </div>
    );
  };

export default ActionIcons;