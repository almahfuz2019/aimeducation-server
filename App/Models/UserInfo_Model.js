const mongoose = require('mongoose');

const userInfoSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
    min: 0, // Minimum value for age
  },
  image: {
    type: String,
    required: true,
    validate: {
      validator: function (value) {
        return value.startsWith('http') || value.startsWith('/path/');
      },
      message: 'Invalid userImage format',
    },
  },
});

module.exports = mongoose.model('UserInfo', userInfoSchema);
