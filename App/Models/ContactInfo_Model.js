const mongoose = require('mongoose');

const contactInfoSchema = new mongoose.Schema({
     email: {
          type: String,
          required: true,
          trim: true,
          validate: {
               validator: function (value) {
                    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value); // Basic email format validation
               },
               message: 'Invalid email format',
          },
     },
     comment: {
          type: String,
          required: true,
          minlength: 5, // Minimum length for the comment
     },
});

module.exports = mongoose.model('Contact', contactInfoSchema);
