const asyncHandler = require('express-async-handler');

// firebase
const { getStorage, ref, uploadBytes, getDownloadURL } = require("firebase/storage");
const firebase = require('../firebase');
const storage = getStorage(firebase);

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
  if(!data){
    res.status(400);
    throw new Error('Data not found')
  }
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
    throw new Error('Please add image')
  }

  if(!req.file.originalname.match(/\.(JPG|jpg|jpeg|png|gif)$/)){
    res.status(400);
    throw new Error('Only image files are allowed!')
  }

  const file = req.file;
  const {originalname} = req.file;

  const imageRef = ref(storage, `bumbu/${originalname}`);
  await uploadBytes(imageRef, file.buffer).then(() => {
    getDownloadURL(ref (storage, `bumbu/${originalname}`)).then(async(url) => {
      const {title, desc} = req.body;
      await BumbuModel.create({
        title,
        desc,
        file: url,
      });
    });
  });
  res.status(200).json({message: 'Success Add New Data'})
});


// Update Bumbu
const updateBumbu = asyncHandler(async (req, res) => {
  const data = await BumbuModel.findById(req.params.id);

  if (!data) {
    res.status(400);
    throw new Error('Bumbu not found');
  }

  if(!req.body.title) {
    res.status(400);
    throw new Error('Please add title')
  }

  if(req.body.desc === 'undefined' || req.body.desc === '<p><br></p>') {
    res.status(400);
    throw new Error('Please add description')
  }

  console.log(req.body.link, 'link');
  console.log(req.body.file, 'body file');
  console.log(req.files, 'files');

  // if(!req.file) {
  //   res.status(400);
  //   throw new Error('Please add image')
  // }

  // if(!req.file.originalname.match(/\.(JPG|jpg|jpeg|png|gif)$/)){
  //   res.status(400);
  //   throw new Error('Only image files are allowed!')
  // }

  // const file = req.file;
  // const {originalname} = req.file;

  // const imageRef = ref(storage, `bumbu/${originalname}`);
  // await uploadBytes(imageRef, file.buffer).then(() => {
  //   getDownloadURL(ref (storage, `bumbu/${originalname}`)).then(async(url) => {
  //     const {title, desc} = req.body;
  //     await BumbuModel.findByIdAndUpdate(req.params.id,
  //     {
  //       title,
  //       desc,
  //       file: url,
  //     });
  //   });
  // });

  res.status(200).json({message: 'test'})
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
});


module.exports = {
  getBumbu,
  getDetailBumbu,
  setBumbu,
  updateBumbu,
  deleteBumbu
}