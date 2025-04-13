// filepath: c:\Users\hp\Downloads\getplaced.com-main\getplaced.com-main\SERVER\router\Mentee-router.js
const express = require('express');
const router = express.Router();
const { getAllMentees } = require('../controllers/Mentee_controller');

// Define routes
router.get('/mentees', getAllMentees);

// Export the router
module.exports = router;