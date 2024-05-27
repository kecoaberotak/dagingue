const express = require("express");
const router = express.Router();
const {
  getAbout,
  getDetailAbout,
  setAbout,
  updateAbout,
  deleteAbout,
} = require("../controllers/aboutController");

// Multer - buat upload file
const multer = require("multer");
const storage = multer.memoryStorage();
const upload = multer({ storage });

router.route("/").get(getAbout).post(upload.array("file"), setAbout);
// fields kalo diisi file foto aja hasilnya sama?
router
  .route("/:id")
  .get(getDetailAbout)
  .put(
    upload.fields([
      { name: "file1", maxCount: 1 },
      { name: "file2", maxCount: 1 },
    ]),
    updateAbout
  )
  .delete(deleteAbout);

module.exports = router;
