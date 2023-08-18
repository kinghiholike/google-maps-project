const express = require('express');
const axios = require('axios');
const cors = require('cors'); // Importing the cors package


const app = express();
const PORT = any;
const express = require('express');
const cors = require('cors'); // Importing the cors middleware



// Enable CORS for all routes
app.use(cors());

app.use(express.json());

// Middleware with proper configuration
app.use(cors({
  origin: 'http://localhost:3000', // Origin of your frontend app
  methods: 'GET', // HTTP methods
}));

app.get('/api/yelp-data', async (req, res) => {
  try {
    const response = await axios.get('https://api.yelp.com/v3/businesses/search', {
      headers: {
        Authorization: `Bearer Kpf_cIMn811kyCRFXFJYQi3WCrSu2PgXE2_BxsF5r1pDhJBo_mil6Seg-NUyzOCDhB63_-_ORiTXCzJT24dR_lvorvB-tpRbeUZvA6WW6jgxnhu-pH9k-OH4tfTcZHYx`,
      },
      params: {
        term: 'restaurants',
        location: 'Namibia',
        limit: 10,
      },
    });

    res.json(response.data);
  } catch (error) {
    console.error('Error fetching Yelp data:', error.message);
    res.status(500).json({ error: 'Error fetching Yelp data' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
