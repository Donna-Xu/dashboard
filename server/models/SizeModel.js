const mongoose = require('mongoose');

const sizeSchema = new mongoose.Schema({
  size: String,
 
});

const Size = mongoose.model('Size', sizeSchema);

module.exports = Size;
