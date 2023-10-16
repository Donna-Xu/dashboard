const mongoose = require('mongoose');

const pressureSchema = new mongoose.Schema({
  pressure: Number,
  
});

const Pressure = mongoose.model('Pressure', pressureSchema);

module.exports = Pressure;
