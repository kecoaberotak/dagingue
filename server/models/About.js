const mongoose = require('mongoose');
const {Schema, model} = mongoose;

const AboutSchema = new Schema (
  {
    title: String,
    desc: String,
    cover1: String,
    cover2: String,
  },
  {
    timestamps: true,
  }
);

const AboutModel = model('potong', AboutSchema);

module.exports =  AboutModel;