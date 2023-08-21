const asyncHandler = require('express-async-handler');
const fs = require('fs');

// firebase
const { getStorage, ref, uploadBytes, getDownloadURL } = require("firebase/storage");
const firebase = require('../firebase');
const storage = getStorage(firebase);

// Model
const PotongModel = require('../models/Potong');

// Get Potong
const getPotong = asyncHandler(async (req, res) => {
  const data = await PotongModel.find();
  res.status(200).json({data, message: 'Get Potong'});
});


// Get Detail Potong
const getDetailPotong = asyncHandler(async (req, res) => {
  const data = await PotongModel.findById(req.params.id)
  if(!data){
    res.status(400);
    throw new Error('Data not found')
  }
  res.status(200).json({data, message: 'Get Detail Potong'});
});


// Set Potong
const setPotong = asyncHandler(async (req, res) => {
  if(!req.body.title) {
    res.status(400);
    throw new Error('Please add title')
  }

  if(req.body.desc === 'undefined' || req.body.desc === '<p><br></p>') {
    res.status(400);
    throw new Error('Please add description')
  }

  if(!req.file) {
    res.status(400);
    throw new Error('Please add image')
  }

  if(!req.file.originalname.match(/\.(JPG|jpg|jpeg|png|gif)$/)){
    res.status(400);
    throw new Error('Only image files are allowed!')
  }

  const file = req.file;
  const {originalname} = req.file;

  const imageRef = ref(storage, `potong/${originalname}`);
  await uploadBytes(imageRef, file.buffer).then(() => {
    getDownloadURL(ref (storage, `potong/${originalname}`)).then(async(url) => {
      const {title, desc} = req.body;
      await PotongModel.create({
        title,
        desc,
        file: url,
      });
    });
  });

  // const parts = originalname.split('.');
  // const ext = parts[parts.length - 1];
  // const image = parts[0] + '.' + ext;

  // const newPath = path.slice(0, 8) + image;
  // fs.renameSync(path, newPath);

  // const {title, desc} = req.body;
  // await PotongModel.create({
  //   title,
  //   desc,
  //   file: newPath,
  // });

  res.status(200).json({message: 'Success Add New Data'})
});


// Update Potong
const updatePotong = asyncHandler(async (req, res) => {
  const data = await PotongModel.findById(req.params.id);

  if (!data) {
    res.status(400);
    throw new Error('Data not found');
  }

  if(!req.body.title) {
    res.status(400);
    throw new Error('Please add title')
  }

  if(req.body.desc === 'undefined' || req.body.desc === '<p><br></p>') {
    res.status(400);
    throw new Error('Please add description')
  }

  if(!req.file) {
    res.status(400);
    throw new Error('Please add image')
  }

  if(!req.file.originalname.match(/\.(JPG|jpg|jpeg|png|gif)$/)){
    res.status(400);
    throw new Error('Only image files are allowed!')
  }

  const {originalname, path} = req.file;
  const parts = originalname.split('.');
  const ext = parts[parts.length - 1];
  const image = parts[0] + '.' + ext;

  const newPath = path.slice(0, 8) + image;
  fs.renameSync(path, newPath);

  const {title, desc} = req.body;
  await PotongModel.findByIdAndUpdate(req.params.id,
  {
    title,
    desc,
    file: newPath,
  });

  res.status(200).json({message: 'Success Update Data'})
});


// Delete Potong
const deletePotong = asyncHandler(async (req, res) => {
  const data = await PotongModel.findById(req.params.id);

  if(!data){
    res.status(400);
    throw new Error('Data not found');
  };

  await data.deleteOne({_id: req.params.id});

  res.status(200).json({message: 'Data Deleted'});
});


module.exports = {
  getPotong,
  getDetailPotong,
  setPotong,
  updatePotong,
  deletePotong
}