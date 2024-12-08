const express = require('express');
const cors = require('cors');

const app = express();

// Enable CORS for all routes
app.use(cors({
  origin: 'https://your-github-pages-subdomain.github.io',
  credentials: true
}));

// Your other routes and API endpoints here

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
