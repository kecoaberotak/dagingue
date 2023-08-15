const { initializeApp } = require('firebase/app');
const config = require('./config');
const firebaseDB = initializeApp(config.firebaseConfig);

module.exports = firebaseDB;