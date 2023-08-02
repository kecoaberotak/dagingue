const express = require('express');
const { getBumbu, setBumbu, updateBumbu, deleteBumbu } = require('../controllers/bumbuController');
const router = express.Router();

// Multer - buat upload file
const multer = require('multer');
const upload = multer({ dest: 'uploads/' })

router.route('/').get(getBumbu).post(upload.single('file'), setBumbu);
router.route('/:id').put(updateBumbu).delete(deleteBumbu);

module.exports = router;