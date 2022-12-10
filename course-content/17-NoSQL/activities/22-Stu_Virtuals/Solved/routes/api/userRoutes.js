const router = require('express').Router();
const {
  createUser,
  getUsers,
  getSingleUser,
} = require('../../controllers/userController.js');


// http://localhost:3001/api/users

// {
//   "fullName": "Farley Wittles"
// }

router.route('/').get(getUsers).post(createUser);

router.route('/:userId').get(getSingleUser);

module.exports = router;
