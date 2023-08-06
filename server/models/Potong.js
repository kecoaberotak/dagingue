const mongoose = require('mongoose');
const {Schema, model} = mongoose;

const PotongSchema = new Schema (
  {
    title: String,
    desc: String,
    file: String,
  },
  {
    timestamps: true,
  }
);

const PotongModel = model('potong', PotongSchema);

module.exports =  PotongModel;