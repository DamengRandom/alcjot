import mongoose from 'mongoose';

const sellSchema = new mongoose.Schema({
  time: {
    type: Date,
    required: true,
    unqiue: true,
  },
  title: {
    type: String,
    required: true,
    unqiue: true,
  },
  quantity: {
    type: Number,
    required: true,
    unqiue: true,
  },
  paylink: {
    type: String,
    required: true,
    unqiue: true,
  },
});

const SellModel = mongoose.models.SellModel
  ? mongoose.models.SellModel
  : mongoose.model('SellModel', sellSchema);

export default SellModel;
