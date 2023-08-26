const CountryDetailsModel = require('../Models/CountryDetails_Model'); // Adjust the path to your CountryDetails model

// Create a new country detail
async function createCountryDetail(req, res) {
  try {
    const newCountryDetail = await CountryDetailsModel.create(req.body);
    res.status(201).json(newCountryDetail);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

// Read all country details
async function getAllCountryDetails(req, res) {
  try {
    const countryDetails = await CountryDetailsModel.find();
    res.json(countryDetails);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

// Read a single country detail
async function getCountryDetailById(req, res) {
  try {
    const countryDetail = await CountryDetailsModel.findById(req.params.id);
    if (!countryDetail) {
      return res.status(404).json({ message: 'Country detail not found' });
    }
    res.json(countryDetail);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

// Update a country detail
async function updateCountryDetail(req, res) {
  try {
    const updatedCountryDetail = await CountryDetailsModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedCountryDetail) {
      return res.status(404).json({ message: 'Country detail not found' });
    }
    res.json(updatedCountryDetail);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

// Delete a country detail
async function deleteCountryDetail(req, res) {
  try {
    const deletedCountryDetail = await CountryDetailsModel.findByIdAndDelete(req.params.id);
    if (!deletedCountryDetail) {
      return res.status(404).json({ message: 'Country detail not found' });
    }
    res.json({ message: 'Country detail deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

module.exports = {
  createCountryDetail,
  getAllCountryDetails,
  getCountryDetailById,
  updateCountryDetail,
  deleteCountryDetail,
};
