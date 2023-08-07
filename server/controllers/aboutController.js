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
  // if(!req.body.title) {
  //   res.status(400);
  //   throw new Error('Please add title')
  // }

  // if(req.body.desc === 'undefined' || req.body.desc === '<p><br></p>') {
  //   res.status(400);
  //   throw new Error('Please add description')
  // }

  // if(!req.file) {
  //   res.status(400);
  //   throw new Error('Please add image')
  // }

  // const {originalname, path} = req.file;
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
  // res.status(200).json({message: 'Success Add New Data'})
  res.status(200).json(req.body);
});


// Update About
const updateAbout = asyncHandler(async (req, res) => {
  // const data = await PotongModel.findById(req.params.id);

  // if (!data) {
  //   res.status(400);
  //   throw new Error('Data not found');
  // }

  // if(!req.body.title) {
  //   res.status(400);
  //   throw new Error('Please add title')
  // }

  // if(req.body.desc === 'undefined' || req.body.desc === '<p><br></p>') {
  //   res.status(400);
  //   throw new Error('Please add description')
  // }

  // if(!req.file) {
  //   res.status(400);
  //   throw new Error('Please add image')
  // }

  // const {originalname, path} = req.file;
  // const parts = originalname.split('.');
  // const ext = parts[parts.length - 1];
  // const image = parts[0] + '.' + ext;

  // const newPath = path.slice(0, 8) + image;
  // fs.renameSync(path, newPath);

  // const {title, desc} = req.body;
  // await PotongModel.findByIdAndUpdate(req.params.id,
  // {
  //   title,
  //   desc,
  //   file: newPath,
  // });

  res.status(200).json({message: 'Success Update Data'})
});


// Delete About
const deleteAbout = asyncHandler(async (req, res) => {
  // const data = await PotongModel.findById(req.params.id);

  // if(!data){
  //   res.status(400);
  //   throw new Error('Data not found');
  // };

  // await data.deleteOne({_id: req.params.id});

  res.status(200).json({message: 'Data Deleted'});
});


module.exports = {
  getAbout,
  setAbout,
  getDetailAbout,
  updateAbout,
  deleteAbout
}