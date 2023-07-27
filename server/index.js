const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

// models
const AdminModel = require('./models/Admin');

const app = express();
// mengubah body jadi json
app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

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
  const {username, password} =  req.body;
  console.log('test');
  try {
    const admin = await AdminModel.findOne({});
    if(password === admin.password){
      res.send({message:"login sucess",admin:admin});
    }else {
      res.send({message:"wrong"});
    }
  } catch (error) {
    throw(error)
  }
});


app.listen(4000); 