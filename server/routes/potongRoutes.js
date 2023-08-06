const express = require('express');
const router = express.Router();
const {getPotong, getDetailPotong ,setPotong, updatePotong, deletePotong} = require('../controllers/potongController');

// Multer - buat upload file
const multer = require('multer');
const upload = multer({ dest: 'uploads/' })

router.route('/').get(getPotong).post(upload.single('file'), setPotong);
router.route('/:id').get(getDetailPotong).put(upload.single('file'), updatePotong).delete(deletePotong);

module.exports = router;