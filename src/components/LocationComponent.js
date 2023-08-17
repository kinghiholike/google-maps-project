import React, { useState, useEffect } from 'react';
import axios from 'axios';

function LocationMap() {
  const [locationData, setLocationData] = useState({});
  const apiKey = 'Kpf_cIMn811kyCRFXFJYQi3WCrSu2PgXE2_BxsF5r1pDhJBo_mil6Seg-NUyzOCDhB63_-_ORiTXCzJT24dR_lvorvB-tpRbeUZvA6WW6jgxnhu-pH9k-OH4tfTcZHYx'; // Replace with your Yelp API key
  const term = 'restaurants'; // You can customize the search term

  useEffect(() => {
    // Fetch location data using Yelp Fusion API
    axios
      .get(`https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&limit=1`, {
        headers: {
          Authorization: `Bearer ${apiKey}`
        }
      })
      .then(response => {
        setLocationData(response.data.businesses[0]);
      })
      .catch(error => {
        console.error('Error fetching Yelp data:', error);
      });
  }, [apiKey, term]);

  return (
    <div>
      {/* Display location data */}
      <h1>Yelp Business Information</h1>
      {locationData.name && <p>Name: {locationData.name}</p>}
      {locationData.location && (
        <p>
          Location: {locationData.location.address1}, {locationData.location.city}
        </p>
      )}
      {/* Add more information you want to display */}
    </div>
  );
}

export default LocationMap;
