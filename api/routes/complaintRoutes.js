const express = require('express');
const router = express.Router();
const {
  createComplaint,
  getComplaints,
  getUserComplaints,
  getComplaintById,
  updateComplaint,
  deleteComplaint
} = require('../controllers/complaintsController');

// Routes
router.route('/')
  .post(createComplaint)
  .get(getComplaints);

router.route('/user')
  .get(getUserComplaints);

router.route('/:id')
  .get(getComplaintById)
  .put(updateComplaint)
  .delete( deleteComplaint);

module.exports = router;