const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const jwt = require("jsonwebtoken");
const secret = 'IARZIMZEhm0l0qw3jLNqiFVuQkSrc1UqzKzmgob8cwF5v1NxQR962MzdAH5l6ay';

// models
const AdminModel = require('./models/Admin');

const app = express();
// mengubah body jadi json
app.use(express.json());
app.use(express.urlencoded());
app.use(cors({credentials: true, origin: 'http://localhost:5173'}));

// Dagingue123!
mongoose.connect('mongodb+srv://dagingue:Dagingue123!@cluster0.01bn11g.mongodb.net/dagingue?retryWrites=true&w=majority');

app.get('/getAdmin', async (req, res) => {
  try {
    const data = await AdminModel.find({});
    res.json(data);
  }catch (err) {
    throw err;
  };
});

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

app.listen(4000); 