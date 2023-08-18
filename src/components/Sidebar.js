import React, { useState } from 'react';
import './Sidebar.css'; // Importing CSS file for styling

function Sidebar(props) {
  const [selectedCategory, setSelectedCategory] = useState('restaurants');

  const handleCategoryChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedCategory(selectedValue);
    props.onCategoryChange(selectedValue);
  };

  const categoryOptions = [
    { value: 'restaurants', label: 'Restaurants' },
    { value: 'parks', label: 'Parks' },
    { value: 'hotels', label: 'Hotels' },
    // Category options
  ];




  return (
    <div className="sidebar">
      
      <label htmlFor="category-dropdown">Select a category:</label>
<select id="category-dropdown" value={selectedCategory} onChange={handleCategoryChange}>
        {categoryOptions.map(option => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
  
</select>
      
      <p className="selected-feedback">You've selected: {selectedCategory}</p>
    </div>
  );
}

export default Sidebar;
