const ContactInfoModel = require('../Models/ContactInfo_Model'); // Adjust the path to your ContactInfo model

// Create new contact information
async function createContactInfo(req, res) {
  try {
    const newContactInfo = await ContactInfoModel.create(req.body);
    res.status(201).json(newContactInfo);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

// Read all contact information
async function getAllContactInfo(req, res) {
  try {
    const contactInfo = await ContactInfoModel.find();
    res.json(contactInfo);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

// Read single contact information
async function getContactInfoById(req, res) {
  try {
    const contactInfo = await ContactInfoModel.findById(req.params.id);
    if (!contactInfo) {
      return res.status(404).json({ message: 'Contact information not found' });
    }
    res.json(contactInfo);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

// Update contact information
async function updateContactInfo(req, res) {
  try {
    const updatedContactInfo = await ContactInfoModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedContactInfo) {
      return res.status(404).json({ message: 'Contact information not found' });
    }
    res.json(updatedContactInfo);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

// Delete contact information
async function deleteContactInfo(req, res) {
  try {
    const deletedContactInfo = await ContactInfoModel.findByIdAndDelete(req.params.id);
    if (!deletedContactInfo) {
      return res.status(404).json({ message: 'Contact information not found' });
    }
    res.json({ message: 'Contact information deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

module.exports = {
  createContactInfo,
  getAllContactInfo,
  getContactInfoById,
  updateContactInfo,
  deleteContactInfo,
};
