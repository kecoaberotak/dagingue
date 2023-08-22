const asyncHandler = require('express-async-handler');

// firebase
const { getStorage, ref, uploadBytes, getDownloadURL } = require("firebase/storage");
const firebase = require('../firebase');
const storage = getStorage(firebase);

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

  if(!file1.originalname.match(/\.(JPG|jpg|jpeg|png|gif)$/)){
    res.status(400);
    throw new Error('Only image files are allowed!')
  }

  if(!file2.originalname.match(/\.(JPG|jpg|jpeg|png|gif)$/)){
    res.status(400);
    throw new Error('Only image files are allowed!')
  }

  const {originalname} = file1;
  const originalname2 = file2.originalname;

  const imageRef1 = ref(storage, `about/${originalname}`);
  const imageRef2 = ref(storage, `about/${originalname2}`);
  let data = {};

  await uploadBytes(imageRef1, file1.buffer).then(() => {
    getDownloadURL(ref (storage, `about/${originalname}`)).then(async(url) => {
      await uploadBytes(imageRef2, file2.buffer).then(() => {
        getDownloadURL(ref (storage, `about/${originalname2}`)).then(async(url2) => {
          const {content} = req.body;
          data = await AboutModel.create({
            content,
            file1: url,
            file2: url2,
          });
        });
      });
    });
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

  if(!file1.originalname.match(/\.(JPG|jpg|jpeg|png|gif)$/)){
    res.status(400);
    throw new Error('Only image files are allowed!')
  }

  if(!file2.originalname.match(/\.(JPG|jpg|jpeg|png|gif)$/)){
    res.status(400);
    throw new Error('Only image files are allowed!')
  }

  const {originalname} = file1;
  const originalname2 = file2.originalname;

  const imageRef1 = ref(storage, `about/${originalname}`);
  const imageRef2 = ref(storage, `about/${originalname2}`);

  await uploadBytes(imageRef1, file1.buffer).then(() => {
    getDownloadURL(ref (storage, `about/${originalname}`)).then(async(url) => {
      await uploadBytes(imageRef2, file2.buffer).then(() => {
        getDownloadURL(ref (storage, `about/${originalname2}`)).then(async(url2) => {
          const {content} = req.body;
          await AboutModel.findByIdAndUpdate(req.params.id,
          {
            content,
            file1: url,
            file2: url2,
          });
        });
      });
    });
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