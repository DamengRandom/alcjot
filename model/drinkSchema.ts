import mongoose from 'mongoose';

const drinkSchema = new mongoose.Schema({
  time: {
    type: Date,
    required: true,
    unqiue: true,
  },
  name: {
    type: String,
    required: true,
    unqiue: true,
  },
  type: {
    type: String,
    required: true,
    unqiue: true,
  },
  from: {
    type: String,
    required: true,
    unqiue: true,
  },
  volume: {
    type: String,
    required: true,
    unqiue: true,
  },
  capcity: {
    type: String,
    required: true,
    unqiue: true,
  },
  price: {
    type: String,
    required: true,
    unqiue: true,
  },
  feel: {
    type: String,
    required: true,
    unqiue: true,
  },
  description: {
    type: String,
    required: true,
    unqiue: true,
  },
  image: {
    type: String,
    required: true,
    unqiue: true,
  },
});

const DrinkModel = mongoose.model('DrinkModel', drinkSchema);

export default DrinkModel;
