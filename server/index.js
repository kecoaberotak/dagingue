const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const cookie = require('cookie-parser');

// Dagingue123!
mongoose.connect('mongodb+srv://dagingue:Dagingue123!@cluster0.01bn11g.mongodb.net/dagingue?retryWrites=true&w=majority');

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors({credentials: true, origin: 'http://localhost:5173'}));
app.use(cookie());
app.use('/uploads', express.static(__dirname + '/uploads'));

// ====== BUMBU =====
app.use('/api/bumbu', require('./routes/bumbuRoutes'));

// ====== AUTH ======
app.use('/auth', require('./routes/authRoutes'));


// // Login
// app.post('/login', async (req, res) => {
//   const {username, password} = req.body;
//   const adminDoc =  await AdminModel.findOne({username});
//   if(adminDoc){
//     const passwordOk = adminDoc.password === password;
//     if(passwordOk) {
//       // logged in
//       jwt.sign(
//         {username,id: adminDoc._id,}, 
//         secret,
//         {}, 
//         (err, token) => {
//           if(err) throw err;
//           res.cookie('token', token).json({status: true, message:"login success"});
//         }
//       )
//     }else {
//       res.json({status: false, message:"wrong password"})
//     }
//   }else res.json({status: false, message: "wrong username"})
// });


// // Profil - token
// app.get('/profile', (req, res) => {
//   const {token} = req.cookies;
//   jwt.verify(token, secret, {}, (err, info) => {
//     if(err) throw err;
//     res.json(info);
//   });
// });


// // Logout
// app.post('/logout', (req, res) => {
//   res.cookie('token', '').json({status : true ,message: 'logout success'});
// });

// middleware
const {errorHandler} = require('./middleware/errorMiddleware');
app.use(errorHandler);


app.listen(4000);