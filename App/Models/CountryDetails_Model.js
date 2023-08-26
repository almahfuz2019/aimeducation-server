const mongoose = require('mongoose');

const CountryDetailsSchema = new mongoose.Schema({
  countryName: {
    type: String,
    required: true,
    trim: true,
    unique: true, // Ensure unique country names
  },
  image: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
    minlength: 10, // Minimum length for the description
  },
});

module.exports = mongoose.model('CountryDetail', CountryDetailsSchema);
