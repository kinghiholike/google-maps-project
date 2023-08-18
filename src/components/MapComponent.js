import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { Loader } from '@googlemaps/js-api-loader';

function LocationMap() {
  const [locationData, setLocationData] = useState({});
  const term = 'restaurants'; // Search term
  
  const searchLocation = 'Namibia'; // Location to search for

  const initMap = useCallback(() => {
    const map = new window.google.maps.Map(document.getElementById('map'), {
      center: { lat: locationData.latitude -22.55620002746582, lng: locationData.longitude  }, // Using the fetched latitude and longitude
      zoom: 15 
    });

    // Marker on the map
    new window.google.maps.Marker({
      position: { lat: locationData.latitude, lng: locationData.longitude },
      map: map,
      title: locationData.name
    });
  }, [locationData]);

  useEffect(() => {
    // Initializing the Google Maps loader
    const loader = new Loader({
      apiKey: 'AIzaSyCU4P2nlmLu8hP8KNFkq91xYH6gtxlyunw',
      version: 'weekly'
    });

    // Loading the Google Maps JavaScript API
    loader.load().then(() => {
      initMap(); // Calling initMap after the API is loaded
    });
  }, [initMap]);

  useEffect(() => {
    axios
      .get(`http://localhost:3000?term=${term}&location=${searchLocation}`)
      .then(response => {
        if (response.data.businesses && response.data.businesses.length > 0) {
          setLocationData(response.data.businesses[0]);
        } else {
          console.error('No businesses found in the response.');
        }
      })
      .catch(error => {
        console.error('Error fetching Yelp data:', error);
      });
  }, [term, searchLocation]);

  return (
    <div>
      {/* Display location data */}
      <h1>Location Information</h1>
      {/* ... your existing JSX */}
      {/* Display the Google Map */}
      <div id="map" style={{ width: '100%', height: '600px' }}></div>
    </div>
  );
}

export default LocationMap;
