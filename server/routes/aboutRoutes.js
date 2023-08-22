const express = require('express');
const router = express.Router();
const {getAbout, getDetailAbout ,setAbout, updateAbout, deleteAbout} = require('../controllers/aboutController');

// Multer - buat upload file
const multer = require('multer');
const storage = multer.memoryStorage();
const upload = multer({storage});

router.route('/').get(getAbout).post(upload.array('file'), setAbout);
router.route('/:id').get(getDetailAbout).put(upload.array('file'), updateAbout).delete(deleteAbout);

module.exports = router;