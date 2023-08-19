import { initializeApp } from 'firebase/app';
import { getStorage } from "firebase/storage";
const config = require('./config');

const app = initializeApp(config.firebaseConfig);
const storage = getStorage(app);

module.exports = {
  app,
  storage,
};