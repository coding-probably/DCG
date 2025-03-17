const express = require('express');
const router = express.Router();
const { 
  registerUser, 
  loginUser, 
  getMe 
} = require('../controllers/authController');


// Routes
router.post('/register', registerUser);
router.post('/login', loginUser);


module.exports = router;