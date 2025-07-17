const express = require('express');
const fs = require('fs');
const path = require('path');
const { verifyToken } = require('../middleware/authMiddleware');
const router = express.Router();

router.get('/', verifyToken, (req, res) => {
  const filePath = path.join(__dirname, '../mock-data/awsCosts.json');
  const data = JSON.parse(fs.readFileSync(filePath));
  res.json(data);
});

module.exports = router;
