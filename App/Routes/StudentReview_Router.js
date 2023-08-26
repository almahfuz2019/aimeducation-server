const express = require('express');
const router = express.Router();
const {
  createStudentReview,
  getAllStudentReviews,
  getStudentReviewById,
  updateStudentReview,
  deleteStudentReview,
  searchStudentReviews, // Import the search function
} = require('../Controllers/StudentReview_controller'); // Adjust the path accordingly

router.post('/', createStudentReview);
router.get('/', getAllStudentReviews);
router.get('/search', searchStudentReviews); // Add the search route here
router.get('/:id', getStudentReviewById);
router.put('/:id', updateStudentReview);
router.delete('/:id', deleteStudentReview);

module.exports = router;
