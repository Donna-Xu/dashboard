const mongoose = require('mongoose');

const meltingPointSchema = new mongoose.Schema({
  meltingPoint: String,
});

const MeltingPoint = mongoose.model('MeltingPoint', meltingPointSchema);

module.exports = MeltingPoint;
