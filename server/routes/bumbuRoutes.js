const express = require('express');
const { getBumbu, setBumbu, updateBumbu, deleteBumbu } = require('../controllers/bumbuController');
const router = express.Router();

router.route('/').get(getBumbu).post(setBumbu);
router.route('/:id').put(updateBumbu).delete(deleteBumbu);

module.exports = router;