const mongoose = require('mongoose');

const freezingPointSchema = new mongoose.Schema({
  freezingPoint: String,
  
});

const FreezingPoint = mongoose.model('FreezingPoint', freezingPointSchema);

module.exports = FreezingPoint;
