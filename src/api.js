// api.js


const YELP_API_KEY = 'Kpf_cIMn811kyCRFXFJYQi3WCrSu2PgXE2_BxsF5r1pDhJBo_mil6Seg-NUyzOCDhB63_-_ORiTXCzJT24dR_lvorvB-tpRbeUZvA6WW6jgxnhu-pH9k-OH4tfTcZHYx';

export const fetchLocations = async (category) => {
  const response = await fetch(`GET{https://api.yelp.com/v3/businesses/search}?term=restaurant{category}&location=Namibia&limit=10`, {
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