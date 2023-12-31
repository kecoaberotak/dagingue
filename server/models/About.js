const mongoose = require('mongoose');
const {Schema, model} = mongoose;

const AboutSchema = new Schema (
  {
    content: String,
    file1: String,
    file2: String,
  },
  {
    timestamps: true,
  }
);

const AboutModel = model('about', AboutSchema);

module.exports =  AboutModel;