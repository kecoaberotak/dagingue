const asyncHandler = require('express-async-handler');
const fs = require('fs');

// Model
const BumbuModel = require('../models/Bumbu');

// Get Bumbu
const getBumbu = asyncHandler(async (req, res) => {
  const data = await BumbuModel.find();
  res.status(200).json({data, message: 'Get Bumbu'});
});

// Get Detail Bumbu
const getDetailBumbu = asyncHandler(async (req, res) => {
  const data = await BumbuModel.findById(req.params.id)
  res.status(200).json({data, message: 'Get Detail Bumbu'});
});

// Set Bumbu
const setBumbu = asyncHandler(async (req, res) => {
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
    throw new Error('Please add file')
  }

  const {originalname, path} = req.file;
  const parts = originalname.split('.');
  const ext = parts[parts.length - 1];
  const image = parts[0] + '.' + ext;

  const newPath = path.slice(0, 8) + image;
  fs.renameSync(path, newPath);

  const {title, desc} = req.body;
  await BumbuModel.create({
    title,
    desc,
    file: newPath,
  });
  res.status(200).json({message: 'Success Add New Data'})
});

// Update Bumbu
const updateBumbu = asyncHandler(async (req, res) => {
  const data = await BumbuModel.findById(req.params.id);
  const {title, desc} = req.body;
  const {file} =  req.file;

  if (!data) {
    res.status(400);
    throw new Error('Bumbu not found');
  }

  // const updatedBumbu = await BumbuModel.findByIdAndUpdate(req.params.id, req.body, {
  //   new: true,
  // });

  // res.status(200).json({data, message: 'Success Update Data'});
  res.status(200).json(req.file);
});

// Delete Bumbu
const deleteBumbu = asyncHandler(async (req, res) => {
  const data = await BumbuModel.findById(req.params.id);

  if(!data){
    res.status(400);
    throw new Error('Data not found');
  };

  await data.deleteOne({_id: req.params.id});

  res.status(200).json({message: 'Data Deleted'});
})

module.exports = {
  getBumbu,
  getDetailBumbu,
  setBumbu,
  updateBumbu,
  deleteBumbu
}