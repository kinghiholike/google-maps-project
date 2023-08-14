
import React, { useState, useEffect } from 'react';
import { fetchLocations } from './api';
import Sidebar from './components/Sidebar';
import DisplayArea from './components/DisplayArea';
import MapComponent from './components/MapComponent';

function App() {
  const [category, setCategory] = useState('restaurants'); // Default category
  const [locations, setLocations] = useState([]);

  const handleCategoryChange = (selectedCategory) => {
    setCategory(selectedCategory);
  };

  // Fetch locations based on the selected category
  useEffect(() => {
    fetchLocations(category)
      .then((data) => {
        setLocations(data); // Update the state with fetched data
      })
      .catch((error) => {
        console.error('Error fetching locations:', error);
      });
  }, [category]);

  return (
    <div>
      <Sidebar onCategoryChange={handleCategoryChange} />
      <DisplayArea locations={locations} />

     //<MapComponent locations={locations} center={{ lat: 0, lng: 0 }} />

      <MapComponent markers={locationData} />
    </div>
  );
}

export default App;

