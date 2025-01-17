const express = require('express');
const userController = require('../controllers/userController');

const router = express.Router();

router.route('/:id').get(userController.getUser).patch(userController.updateUser).delete(userController.deleteUser);
router.route('/create_user').post(userController.createUser);

module.exports = router;