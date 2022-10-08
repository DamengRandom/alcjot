import mongoose from 'mongoose';

const hitsSchema = new mongoose.Schema({
  name: {
    type: String,
    unqiue: true,
  },
  hits: {
    type: Number,
    unqiue: true,
  },
});

const HitsModel = mongoose.models.HitsModel
  ? mongoose.models.HitsModel
  : mongoose.model('HitsModel', hitsSchema);

export default HitsModel;
