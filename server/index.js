const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const config = require('./config');
// global.XMLHttpRequest = require("xhr2");

// Database MongoDB
require('dotenv').config();
mongoose.connect(process.env.DATABASE);

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors({credentials: true, origin: ['http://localhost:5173', 'https://www.dagingue.xyz', 'https://dagingue.vercel.app', `https://dagingue-kecoaberotak.vercel.app`, 'http://localhost:4173']}));
app.use(cookieParser());
app.use('/uploads', express.static(__dirname + '/uploads'));

// ====== AUTH ======
app.use('/auth', require('./routes/authRoutes'));

// ====== ABOUT ======
app.use('/api/about', require('./routes/aboutRoutes'));

// ====== BUMBU =====
app.use('/api/bumbu', require('./routes/bumbuRoutes'));

// ====== POTONG ======
app.use('/api/potong', require('./routes/potongRoutes'));


// middleware
const {errorHandler} = require('./middleware/errorMiddleware');
app.use(errorHandler);


app.listen(config.port, () => {
  console.log(`Server listening on Port ${config.port}`);
});