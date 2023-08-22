const express = require('express');
const router = express.Router();
const { getBumbu, getDetailBumbu, setBumbu, updateBumbu, deleteBumbu } = require('../controllers/bumbuController');

// Multer - buat upload file
const multer = require('multer');
const storage = multer.memoryStorage();
const upload = multer({storage});

router.route('/').get(getBumbu).post(upload.single('file'), setBumbu);
router.route('/:id').get(getDetailBumbu).put(upload.single('file'),updateBumbu).delete(deleteBumbu);

module.exports = router;