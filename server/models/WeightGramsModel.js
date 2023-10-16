const mongoose = require('mongoose');

const weightGramsSchema = new mongoose.Schema({
  weightGrams: Number,
  
});

const WeightGrams = mongoose.model('WeightGrams', weightGramsSchema);

module.exports = WeightGrams;
