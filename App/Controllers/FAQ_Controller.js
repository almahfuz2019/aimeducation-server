const FAQModel = require('../Models/FAQ_Model'); // Adjust the path to your FAQ model

// Create a new FAQ
async function createFAQ(req, res) {
  try {
    const newFAQ = await FAQModel.create(req.body);
    res.status(201).json(newFAQ);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

// Read all FAQs
async function getAllFAQs(req, res) {
  try {
    const faqs = await FAQModel.find();
    res.json(faqs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

// Read a single FAQ
async function getFAQById(req, res) {
  try {
    const faq = await FAQModel.findById(req.params.id);
    if (!faq) {
      return res.status(404).json({ message: 'FAQ not found' });
    }
    res.json(faq);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

// Update an FAQ
async function updateFAQ(req, res) {
  try {
    const updatedFAQ = await FAQModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedFAQ) {
      return res.status(404).json({ message: 'FAQ not found' });
    }
    res.json(updatedFAQ);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

// Delete an FAQ
async function deleteFAQ(req, res) {
  try {
    const deletedFAQ = await FAQModel.findByIdAndDelete(req.params.id);
    if (!deletedFAQ) {
      return res.status(404).json({ message: 'FAQ not found' });
    }
    res.json({ message: 'FAQ deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

// Search FAQs
async function searchFAQs(req, res) {
  try {
    const searchParams = {};
    if (req.query.question) {
      searchParams.question = new RegExp(req.query.question, 'i'); // Use 'i' for case-insensitive search
    }
    if (req.query.category) {
      searchParams.category = new RegExp(req.query.category, 'i');
    }
    const faqs = await FAQModel.find(searchParams);
    res.json(faqs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

module.exports = {
  createFAQ,
  getAllFAQs,
  getFAQById,
  updateFAQ,
  deleteFAQ,
  searchFAQs,
};
