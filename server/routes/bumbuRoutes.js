const express = require('express');
const { getBumbu, getDetailBumbu, setBumbu, updateBumbu, deleteBumbu } = require('../controllers/bumbuController');
const router = express.Router();

// Multer - buat upload file
const multer = require('multer');
const upload = multer({ dest: 'uploads/' })

router.route('/').get(getBumbu).post(upload.single('file'), setBumbu);
router.route('/:id').get(getDetailBumbu).put(updateBumbu).delete(deleteBumbu);

module.exports = router;