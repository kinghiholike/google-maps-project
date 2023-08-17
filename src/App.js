import React, { useState, useEffect } from 'react';
import { fetchLocations } from './api';
import './api';

import Sidebar from './components/Sidebar';
import DisplayArea from './components/DisplayArea';
import MapComponent from './components/MapComponent';



function App() {
  const [category, setCategory] = useState('restaurants'); // Default category
  const [locations, setLocations] = useState([]);
  const [locationData, setLocationData] = useState([]);

  const handleCategoryChange = (selectedCategory) => {
    setCategory(selectedCategory);
  };

  // Fetch locations based on the selected category
  useEffect(() => {
    fetchLocations(category)
      .then((data) => {
        setLocations(data);
        setLocationData(data.map((location) => ({
          lat: location.latitude,
          lng: location.longitude,
        })));
      })
      .catch((error) => {
        console.error('Error fetching locations:', error);
      });
  }, [category]);

  return (
    <div>
      <Sidebar onCategoryChange={handleCategoryChange} />
      <DisplayArea locations={locations} />

      <MapComponent markers={locationData} />
    </div>
  );
}

export default App;