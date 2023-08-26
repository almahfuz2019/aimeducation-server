const UserInfoModel = require('../Models/UserInfo_Model');
// Create a new user
async function createUser(req, res) {
  try {
    const newUser = await UserInfoModel.create(req.body);
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
// Read all users
async function getAllUsers(req, res) {
  try {
    const users = await UserInfoModel.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
// Read a single user
async function getUserById(req, res) {
  try {
    const user = await UserInfoModel.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
// Update a user
async function updateUser(req, res) {
  try {
    const updatedUser = await UserInfoModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedUser) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json(updatedUser);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
// Delete a user
async function deleteUser(req, res) {
  try {
    const deletedUser = await UserInfoModel.findByIdAndDelete(req.params.id);
    if (!deletedUser) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json({ message: 'User deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
// Search users
async function searchUsers(req, res) {
  try {
    const searchParams = {};
    if (req.query.name) {
      searchParams.name = new RegExp(req.query.name, 'i'); // Use 'i' for case-insensitive search
    }
    if (req.query.age) {
      searchParams.age = parseInt(req.query.age);
    }
    const users = await UserInfoModel.find(searchParams);
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

module.exports = {
  createUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
  searchUsers,
};
