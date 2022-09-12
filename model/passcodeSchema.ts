import mongoose from 'mongoose';

const passcodeSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
    unqiue: true,
  },
  passcode: {
    type: String,
    required: true,
    unqiue: true,
  },
});

const PasscodeModel = mongoose.model('PasscodeModel', passcodeSchema);

export default PasscodeModel;
