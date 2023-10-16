const express = require('express');
const app = express();
app.use(cors());
const port = 5000; S

mongoose.connect('mongodb://localhost:27017/dashboard', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const TemperatureModel = mongoose.model('Temperature', {
  temperature: Number,

});

const PressureModel = mongoose.model('Pressure', {
  pressure: Number,
});

const ColorModel = mongoose.model('Color', {
  color: String,
});

const FreezingPointModel = mongoose.model('FreezingPoint', {
  freezingPoint: String,
});

const MeltingPointModel = mongoose.model('MeltingPoint', {
  meltingPoint: String,
});

const LocationModel = mongoose.model('Location', {
  location: String,
});

const QuantityModel = mongoose.model('Quantity', {
  quantity: Number,
});

const RainRateModel = mongoose.model('RainRate', {
  rainRate: Number,
});

const SizeModel = mongoose.model('Size', {
  size: String,
});

const WeightGramsModel = mongoose.model('WeightGrams', {
  weightGrams: Number,
});

app.use(express.json());

app.post('/api/search', async (req, res) => {
  const { collection, field, minThreshold, maxThreshold } = req.body;


  try {
    let data;

    if (!['temperature', 'pressure', 'color', 'location', 'meltingPoint', 'freezingPoint', 'rainRate', 'size', 'weightgrams', 'quantity'].includes(collection)) {
      res.status(400).json({ error: 'Invalid collection name' });
      return;
    }

    switch (collection) {
      case 'temperature':
        data = await TemperatureModel.find({ [field]: { $lt: maxThreshold, $gt: minThreshold } });
        break;
      case 'pressure':
        data = await PressureModel.find({ [field]: { $lt: maxThreshold, $gt: minThreshold } });
        break;
      case 'color':
        data = await ColorModel.find({});
        break;
      case 'location':
        data = await LocationModel.find({});
        break;
      case 'meltingPoint':
        data = await MeltingPointModel.find({});
        break;
      case 'freezingPoint':
        data = await FreezingPointModel.find({});
        break;
      case 'rainRate':
        data = await RainRateModel.find({});
        break;
      case 'size':
        data = await SizeModel.find({});
        break;
      case 'weightgrams':
        data = await WeightGramsModel.find({});
        break;
      case 'quantity':
        data = await QuantityModel.find({});
        break;
      default:
        res.status(400).json({ error: 'Invalid collection name' });
        return;
    }

    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
