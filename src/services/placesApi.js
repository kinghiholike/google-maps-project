// src/services/placesApi.js
import axios from 'axios';

const API_KEY = 'AIzaSyCU4P2nlmLu8hP8KNFkq91xYH6gtxlyunw';

export const fetchRestaurants = async (latitude, longitude) => {
  const response = await axios.get(
    `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${latitude},${longitude}&radius=1500&type=restaurant&key=${API_KEY}`
  );

  return response.data.results;
};
