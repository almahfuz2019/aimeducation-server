const StudentReviewModel = require('../Models/StudentReviews_Model'); // Adjust the path to your studentReview model

// Create a new student review
async function createStudentReview(req, res) {
  try {
    const newStudentReview = await StudentReviewModel.create(req.body);
    res.status(201).json(newStudentReview);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

// Read all student reviews
async function getAllStudentReviews(req, res) {
  try {
    const studentReviews = await StudentReviewModel.find();
    res.json(studentReviews);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

// Read a single student review
async function getStudentReviewById(req, res) {
  try {
    const studentReview = await StudentReviewModel.findById(req.params.id);
    if (!studentReview) {
      return res.status(404).json({ message: 'Student review not found' });
    }
    res.json(studentReview);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

// Update a student review
async function updateStudentReview(req, res) {
  try {
    const updatedStudentReview = await StudentReviewModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedStudentReview) {
      return res.status(404).json({ message: 'Student review not found' });
    }
    res.json(updatedStudentReview);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

// Delete a student review
async function deleteStudentReview(req, res) {
  try {
    const deletedStudentReview = await StudentReviewModel.findByIdAndDelete(req.params.id);
    if (!deletedStudentReview) {
      return res.status(404).json({ message: 'Student review not found' });
    }
    res.json({ message: 'Student review deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
// Search student reviews
async function searchStudentReviews(req, res) {
     try {
       const searchParams = {};
       if (req.query.name) {
         searchParams.name = new RegExp(req.query.name, 'i'); // Use 'i' for case-insensitive search
       }
       if (req.query.profession) {
         searchParams.profession = new RegExp(req.query.profession, 'i');
       }
       // You can add more search criteria as needed
   
       const studentReviews = await StudentReviewModel.find(searchParams);
       res.json(studentReviews);
     } catch (error) {
       res.status(500).json({ message: error.message });
     }
   }
module.exports = {
 createStudentReview,
  getAllStudentReviews,
  getStudentReviewById,
  updateStudentReview,
  deleteStudentReview,
  searchStudentReviews
};
