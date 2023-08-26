const mongoose = require('mongoose');
const studentReviewSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  profession: {
     type: String,
     required: true,
  },
  image: {
     type: String,
     required: true,
  },
  comment: {
     type: String,
     required: true,
  }
});
module.exports = mongoose.model('studentReview', studentReviewSchema);
