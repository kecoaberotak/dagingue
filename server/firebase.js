import { initializeApp } from 'firebase/app';
const config = require('./config');
const firebase = initializeApp(config.firebaseConfig);

module.exports = firebase;