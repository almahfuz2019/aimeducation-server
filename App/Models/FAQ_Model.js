const mongoose = require('mongoose');
const faqSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  subTitle: {
     type: String,
     required: true,
  }
});
module.exports = mongoose.model('faq', faqSchema);
