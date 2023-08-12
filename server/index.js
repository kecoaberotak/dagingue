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
const port = 4000;

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


app.listen(port, () => {
  console.log(`Server listening on Port ${port}`);
});