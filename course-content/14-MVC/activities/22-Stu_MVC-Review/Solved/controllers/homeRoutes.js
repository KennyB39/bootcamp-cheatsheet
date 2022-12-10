const router = require('express').Router();
const { User } = require('../models');

router.get('/', async (req, res) => {
  try {
    // Get all users, sorted by name
    const userData = await User.findAll({
      attributes: { exclude: ['password'] },
      order: [['name', 'ASC']],
    });
    console.log("userData", userData);
    // Serialize user data so templates can read it
    const users = userData.map((project) => project.dataValues);
     console.log("users", users);
    // Pass serialized data into Handlebars.js template
    res.render('homepage', { users: users });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
