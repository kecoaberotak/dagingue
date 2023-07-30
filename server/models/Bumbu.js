const mongoose = require('mongoose');
const {Schema, model} = mongoose;

const BumbuSchema = new Schema(
  {
    title: String,
    desc: String,
    file: String,
  }, 
  {
    timestamps: true,
  }
);

const BumbuModel = model('bumbu', BumbuSchema);

module.exports = BumbuModel;