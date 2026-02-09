const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const auth = require('../middlewares/auth');
const validate = require('../middlewares/validate');
const { userSchema } = require('../validators/userValidator');

router.use(auth);
router.get('/users', userController.getUsers);
router.post('/users', validate(userSchema), userController.createUser);
router.put('/users/:id', validate(userSchema), userController.updateUser);
router.delete('/users/:id', userController.deleteUser);

module.exports = router;