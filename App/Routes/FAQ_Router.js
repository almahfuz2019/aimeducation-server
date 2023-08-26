const express = require('express');
const router = express.Router();
const {
  createFAQ,
  getAllFAQs,
  getFAQById,
  updateFAQ,
  deleteFAQ,
  searchFAQs, // Your search function for FAQs
} = require('../Controllers/FAQ_Controller'); // Adjust the path to your FAQ controllers

router.post('/', createFAQ);
router.get('/', getAllFAQs);
router.get('/search', searchFAQs); // Search route should come before :id route
router.get('/:id', getFAQById);
router.put('/:id', updateFAQ);
router.delete('/:id', deleteFAQ);

module.exports = router;
