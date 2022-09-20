import mongoose from 'mongoose';

const tokenSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
    unqiue: true,
  },
  token: {
    type: String,
    required: true,
    unqiue: true,
  },
});

const TokenModel = mongoose.models.TokenModel
  ? mongoose.models.TokenModel
  : mongoose.model('TokenModel', tokenSchema);

export default TokenModel;
