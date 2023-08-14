import React from 'react';

function Sidebar(props) {
  const handleCategoryChange = (event) => {
    props.onCategoryChange(event.target.value);
  };

  return (
    <div>
      <select onChange={handleCategoryChange}>
        <option value="restaurants">Restaurants</option>
        <option value="parks">Parks</option>
        <option value="hotels">Hotels</option>
        {/* Add other category options */}
      </select>
    </div>
  );
}

export default Sidebar;
