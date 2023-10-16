const mongoose = require('mongoose');

const rainRateSchema = new mongoose.Schema({
  rainRate: Number,
  
});

const RainRate = mongoose.model('RainRate', rainRateSchema);

module.exports = RainRate;
