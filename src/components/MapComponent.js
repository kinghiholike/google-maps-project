import React, { useState, useEffect } from 'react';
import axios from 'axios';

function LocationMap() {
  const [locationData, setLocationData] = useState({});
  const apiKey = ''; // Replace with your Yelp API key
  const term = 'restaurants'; // You can customize the search term
  const searchLocation = 'New York'; // Replace with the location you want to search for

  useEffect(() => {
    // Fetch location data using Yelp Fusion API
    axios
      .get(`https://api.yelp.com/v3/businesses/search?term=${term}&location=${searchLocation}&limit=1`, {
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
  }, [apiKey, term, searchLocation]);

  // Google Maps initialization
  useEffect(() => {
    // Load the Google Maps API script dynamically
    const googleMapsScript = document.createElement('script');
    googleMapsScript.src = `https://maps.googleapis.com/maps/api/js?key=`;
    googleMapsScript.async = true;
    googleMapsScript.defer = true;
    document.head.appendChild(googleMapsScript);

    // Callback function after Google Maps script is loaded
    googleMapsScript.onload = initMap;
  }, []);

  const initMap = () => {
    const map = new window.google.maps.Map(document.getElementById('map'), {
      center: { lat: locationData.latitude, lng: locationData.longitude }, // Use the fetched latitude and longitude
      zoom: 15 // Set the initial zoom level
    });

    // Add a marker to the map
    new window.google.maps.Marker({
      position: { lat: locationData.latitude, lng: locationData.longitude }, // Use the fetched latitude and longitude
      map: map,
      title: locationData.name // Set the marker title
    });
  };

  return (
    <div>
      {/* Display location data */}
      <h1>Location Information</h1>
      {locationData.name && <p>Name: {locationData.name}</p>}
      {locationData.location && (
        <p>
          Location: {locationData.location.address1}, {locationData.location.city}
        </p>
      )}

      {/* Display the Google Map */}
      <div id="map" style={{ width: '100%', height: '800px' }}></div>
    </div>
  );
}

export default LocationMap;
