const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();

// models
const AdminModel = require('./models/Admin');

app.use(cors());
// mengubah body jadi json
app.use(express.json());

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

// app.post('/createAdmin', async (req, res) => {
//   const admin = req.body;
//   const newAdmin = new AdminModel(admin);
//   await newAdmin.save();

//   res.json(admin);
// });


app.listen(4000); 