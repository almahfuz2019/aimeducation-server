const express = require('express');
const router = express.Router();
const {
  createCountryDetail,
  getAllCountryDetails,
  getCountryDetailById,
  updateCountryDetail,
  deleteCountryDetail,
} = require('../Controllers/CountryDetail_controller'); // Adjust the path to your CountryDetails controller
router.post('/', createCountryDetail);
router.get('/', getAllCountryDetails);
router.get('/:id', getCountryDetailById);
router.put('/:id', updateCountryDetail);
router.delete('/:id', deleteCountryDetail);

module.exports = router;
