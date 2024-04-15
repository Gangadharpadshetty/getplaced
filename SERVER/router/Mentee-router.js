const express = require('express');
const Mentees = require('../controllers/Mentee-controller');
const router = express.Router();



router.route('/mentees').get(Mentees);
module.exports = router;