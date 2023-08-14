import React, { useState, useEffect } from 'react';
import axios from 'axios';

function LocationMap() {
  const [locationData, setLocationData] = useState({});
  
  useEffect(() => {
    // Replace 'YOUR_API_KEY' with the actual API key from ipdata.co
    const apiKey = '9f9c09cd2a836f15ab170e1f9e446f3c89fce9208f074f58ce486c18';
    const ipAddress = '105.232.255.239';  // You can replace this with a dynamic IP address if needed
    
    axios.get(`https://api.ipdata.co/${ipAddress}?api-key=${apiKey}`)
      .then(response => {
        setLocationData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);
  
  return (
    <div>
      {/* Display location data */}
      <h1>Your Location Information</h1>
      <p>City: {locationData.city}</p>
      <p>Region: {locationData.region}</p>
      {/* Add more information you want to display */}
    </div>
  );
}

export default LocationMap;
