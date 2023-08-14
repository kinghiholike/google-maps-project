// api.js

// Replace 'YOUR_YELP_API_KEY' with your actual Yelp API key
const YELP_API_KEY = 'YOUR_YELP_API_KEY';
const YELP_API_BASE_URL = 'https://api.yelp.com/v3/businesses/search';

export const fetchLocations = async (category) => {
  const response = await fetch(`${YELP_API_BASE_URL}?term=${category}&location=YOUR_LOCATION&limit=10`, {
    headers: {
      Authorization: `Bearer ${YELP_API_KEY}`,
    },
  });
  
  if (!response.ok) {
    throw new Error('Error fetching locations from Yelp API');
  }
  
  const data = await response.json();
  return data.businesses.map((business) => ({
    id: business.id,
    name: business.name,
    address: business.location.address1,
    description: business.categories.map((category) => category.title).join(', '),
    lat: business.coordinates.latitude,
    lng: business.coordinates.longitude,
  }));
};