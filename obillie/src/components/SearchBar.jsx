import React, { useState } from 'react';
import { Search } from 'lucide-react';
import '../styles/SearchBar.css'; // Assuming you have a CSS file for styling


// Search Bar Component
const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className={`search-container ${isFocused ? 'focused' : ''}`}>
      <div className="search-wrapper">
        <Search className="search-icon" size={20} />
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className="search-input"
        />
      </div>
    </div>
  );
};

export default SearchBar;