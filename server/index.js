const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const cookie = require('cookie-parser');

// Dagingue123!
mongoose.connect('mongodb+srv://dagingue:Dagingue123!@cluster0.01bn11g.mongodb.net/dagingue?retryWrites=true&w=majority');

// jwt
const jwt = require("jsonwebtoken");
const secret = 'IARZIMZEhm0l0qw3jLNqiFVuQkSrc1UqzKzmgob8cwF5v1NxQR962MzdAH5l6ay';

// models
const AdminModel = require('./models/Admin');

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors({credentials: true, origin: 'http://localhost:5173'}));
app.use(cookie());
app.use('/uploads', express.static(__dirname + '/uploads'));

// ====== BUMBU =====
app.use('/api/bumbu', require('./routes/bumbuRoutes'));




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

// middleware
const {errorHandler} = require('./middleware/errorMiddleware');
app.use(errorHandler);


// // getBumbu
// app.get('/getBumbu', async (req, res) => {
//   try {
//     const data = await BumbuModel.find({});
//     res.json(data);
//   }catch (err) {
//     throw err;
//   };
// });

// // deleteBumbu
// app.delete('/deleteBumbu', async (req, res) => {
//   const bumbu = await BumbuModel.findById(req.params.id);

//   if (!todo) {
//     res.status(400);
//     throw new Error('Todo not found');
//   }

//   await todo.remove();

//   res.status(200).json({ id: req.params.id });
// });

app.listen(4000);