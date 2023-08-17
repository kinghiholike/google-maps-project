// api.js

// Replace 'YOUR_YELP_API_KEY' with your actual Yelp API key
const YELP_API_KEY = 'Kpf_cIMn811kyCRFXFJYQi3WCrSu2PgXE2_BxsF5r1pDhJBo_mil6Seg-NUyzOCDhB63_-_ORiTXCzJT24dR_lvorvB-tpRbeUZvA6WW6jgxnhu-pH9k-OH4tfTcZHYx';
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