const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const cookie = require('cookie-parser');
const fs = require('fs');

// jwt
const jwt = require("jsonwebtoken");
const secret = 'IARZIMZEhm0l0qw3jLNqiFVuQkSrc1UqzKzmgob8cwF5v1NxQR962MzdAH5l6ay';

// Multer - buat upload file
const multer = require('multer');
const upload = multer({ dest: 'uploads/' })

// models
const AdminModel = require('./models/Admin');
const BumbuModel = require('./models/Bumbu');

const app = express();
app.use(express.json());
app.use(express.urlencoded());
app.use(cors({credentials: true, origin: 'http://localhost:5173'}));
app.use(cookie());

// Dagingue123!
mongoose.connect('mongodb+srv://dagingue:Dagingue123!@cluster0.01bn11g.mongodb.net/dagingue?retryWrites=true&w=majority');

// app.get('/getAdmin', async (req, res) => {
//   try {
//     const data = await AdminModel.find({});
//     res.json(data);
//   }catch (err) {
//     throw err;
//   };
// });

// Login
app.post('/login', async (req, res) => {
  const {username, password} = req.body;
  const adminDoc =  await AdminModel.findOne({username});
  if(adminDoc){
    const passwordOk = adminDoc.password === password;
    if(passwordOk) {
      // logged in
      jwt.sign(
        {username,id: adminDoc._id,}, 
        secret,
        {}, 
        (err, token) => {
          if(err) throw err;
          res.cookie('token', token).json({status: true, message:"login success"});
        }
      )
    }else {
      res.json({status: false, message:"wrong password"})
    }
  }else res.json({status: false, message: "wrong username"})
});


// Profil - token
app.get('/profile', (req, res) => {
  const {token} = req.cookies;
  jwt.verify(token, secret, {}, (err, info) => {
    if(err) throw err;
    res.json(info);
  });
});


// Logout
app.post('/logout', (req, res) => {
  res.cookie('token', '').json({status : true ,message: 'logout success'});
});

// ====== BUMBU =====

// addBumbu
app.post('/addBumbu', upload.single('file'), async (req, res) => {
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

  res.send({message: 'upload success'});
});

app.listen(4000);