const express = require('express');
const router = express.Router();

// Mock Workshops Data
const workshops = [
  { id: 1, title: 'React Workshop', price: 50 },
  { id: 2, title: 'Node.js Workshop', price: 75 },
];

router.get('/', (req, res) => {
  res.json(workshops);
});

module.exports = router;
