const mongoose = require('mongoose');

const quantitySchema = new mongoose.Schema({
  quantity: Number,
  
});

const Quantity = mongoose.model('Quantity', quantitySchema);

module.exports = Quantity;
