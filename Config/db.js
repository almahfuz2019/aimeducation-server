const mongoose = require('mongoose');
async function connectToDatabase() {
  try {
    await mongoose.connect('mongodb://localhost:27017/aec', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Database connected');
  } catch (error) {
    console.error('Database connection error:', error);
  }
}
module.exports = connectToDatabase;
