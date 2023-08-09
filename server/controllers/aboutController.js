const asyncHandler = require('express-async-handler');
const fs = require('fs');

// Model
const AboutModel = require('../models/About');

// Get About
const getAbout = asyncHandler(async (req, res) => {
  const data = await AboutModel.find();
  res.status(200).json({data, message: 'Get About'});
});


// Get Detail About
const getDetailAbout = asyncHandler(async (req, res) => {
  const data = await AboutModel.findById(req.params.id)
  if(!data){
    res.status(400);
    throw new Error('Data not found')
  }
  res.status(200).json({data, message: 'Get Detail About'});
});


// Set About
const setAbout = asyncHandler(async (req, res) => {

  if(req.body.content === 'undefined' || req.body.content === '<p><br></p>') {
    res.status(400);
    throw new Error('Please add content')
  }
  
  if(!req.files) {
    res.status(400);
    throw new Error('Please add image')
  }
  
  const file1 = req.files[0];
  const file2 = req.files[1];

  const {originalname, path} = file1;
  const parts = originalname.split('.');
  const ext = parts[parts.length - 1];
  const image = parts[0] + '.' + ext;

  const newPath = path.slice(0, 8) + image;
  fs.renameSync(path, newPath);

  const originalname2 = file2.originalname;
  const path2 = file2.path;
  const parts2 = originalname2.split('.');
  const ext2 = parts2[parts2.length - 1];
  const image2 = parts2[0] + '.' + ext2;

  const newPath2 = path2.slice(0, 8) + image2;
  fs.renameSync(path2, newPath2);

  const {content} = req.body;
  const data = await AboutModel.create({
    content,
    file1: newPath,
    file2: newPath2,
  });
  res.status(200).json({data, message: 'Success Add New Data'});
});


// Update About
const updateAbout = asyncHandler(async (req, res) => {
  const data = await AboutModel.findById(req.params.id);

  if (!data) {
    res.status(400);
    throw new Error('Content not found');
  }
  
  if(req.body.content === 'undefined' || req.body.content === '<p><br></p>') {
    res.status(400);
    throw new Error('Please add content')
  }
  
  if(!req.files) {
    res.status(400);
    throw new Error('Please add image')
  }
  
  const file1 = req.files[0];
  const file2 = req.files[1];

  const {originalname, path} = file1;
  const parts = originalname.split('.');
  const ext = parts[parts.length - 1];
  const image = parts[0] + '.' + ext;

  const newPath = path.slice(0, 8) + image;
  fs.renameSync(path, newPath);

  const originalname2 = file2.originalname;
  const path2 = file2.path;
  const parts2 = originalname2.split('.');
  const ext2 = parts2[parts2.length - 1];
  const image2 = parts2[0] + '.' + ext2;

  const newPath2 = path2.slice(0, 8) + image2;
  fs.renameSync(path2, newPath2);

  const {content} = req.body;
  await AboutModel.findByIdAndUpdate(req.params.id,
  {
    content,
    file1: newPath,
    file2: newPath2,
  });

  res.status(200).json({message: 'Success Update Data'})
});


// Delete About
const deleteAbout = asyncHandler(async (req, res) => {
  const data = await AboutModel.findById(req.params.id);

  if(!data){
    res.status(400);
    throw new Error('Data not found');
  };

  await data.deleteOne({_id: req.params.id});

  res.status(200).json({message: 'Data Deleted'});
});


module.exports = {
  getAbout,
  setAbout,
  getDetailAbout,
  updateAbout,
  deleteAbout
}