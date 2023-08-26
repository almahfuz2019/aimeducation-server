const express = require('express');
const router = express.Router();
const {
     createUser,
     getAllUsers,
     getUserById,
     updateUser,
     deleteUser,
     searchUsers, // Your search function
} = require('../Controllers/UserInfo_Controller'); // Adjust the path to your controllers
router.post('/', createUser);
router.get('/', getAllUsers);
router.get('/search', searchUsers); // Search route should come before :id route
router.get('/:id', getUserById);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);

module.exports = router;
