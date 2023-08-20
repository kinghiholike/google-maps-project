import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios'; 
import { Loader } from '@googlemaps/js-api-loader';
import './MapComponent.css';


function LocationMap() {
  const [locationData, setLocationData] = useState({lat: -22.55620002746582.latitude, lng: 17.075899124145508.longitude});
  const term = 'restaurants';
  const searchLocation = 'Namibia';
  

  const initMap = useCallback(() => {
    const map = new window.google.maps.Map(document.getElementById('map'), {
      center: { lat: -22.55620002746582.latitude, lng: 17.075899124145508.longitude },
      zoom: 15 
    });

    // Marker on the map
    new window.google.maps.Marker({
      position: { lat: -22.55620002746582.latitude, lng: 17.075899124145508.longitude },
      map: map,
      title: locationData.name
    });
  }, [locationData]);

  useEffect(() => {
    const loader = new Loader({
      apiKey: 'AIzaSyCU4P2nlmLu8hP8KNFkq91xYH6gtxlyunw',
      version: 'weekly'
    });

    loader.load().then(() => {
      initMap();
    });
  }, [initMap]);

  useEffect(() => {
    axios
      .get(`http://localhost:3000?term=restaurant{term}&location=Namibia{searchLocation}`)
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
      {}
      {/* Display the Google Map */}
      <div id="map" style={{ width: '100%', height: '600px' }}></div>
    </div>
  );
}

export default LocationMap;
