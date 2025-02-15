import React, { useRef, useEffect, useState } from 'react';
import { Icon } from '@iconify/react';

// importing the styles
import "../../assests/styles/navbar.css"

const SearchBar = ({ onClose }) => {
  const containerRef = useRef(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredData, setFilteredData] = useState([]);

  // Sample data for testing
  const sampleData = [
    'Apple',
    'Banana',
    'Cherry',
    'Date',
    'Elderberry',
    'Fig',
    'Grapes',
    'Honeydew',
    'Kiwi',
    'Lemon',
    'Mango',
    'Nectarine',
    'Orange',
    'Papaya',
    'Quince',
    'Raspberry',
    'Strawberry',
    'Tangerine',
    'Ugli Fruit',
    'Vanilla Bean',
    'Watermelon',
    'Xigua',
    'Yellow Passion Fruit',
    'Zucchini',
  ];

  // Close popup when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        onClose();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);

  // Filter data based on search query
  useEffect(() => {
    if (searchQuery.trim()) {
      const results = sampleData.filter((item) =>
        item.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredData(results);
    } else {
      setFilteredData([]);
    }
  }, [searchQuery]);

  return (
    <div className="popup-overlay">
      <div className="popup-container" ref={containerRef}>
        <div className="popup-header">
          <Icon icon="material-symbols:search-rounded" className="popup-icon" />
          <input
            type="text"
            placeholder="Search here..."
            className="popup-input"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        {filteredData.length > 0 && (
          <ul className="popup-results">
            {filteredData.map((item, index) => (
              <li key={index} className="popup-result-item" onClick={() => setSearchQuery(item)}>
                {item}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default SearchBar;
