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

// ====== AUTH ======
app.use('/auth', require('./routes/authRoutes'));

// ====== BUMBU =====
app.use('/api/bumbu', require('./routes/bumbuRoutes'));


// middleware
const {errorHandler} = require('./middleware/errorMiddleware');
app.use(errorHandler);


app.listen(4000);