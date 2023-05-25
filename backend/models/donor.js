const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const donorSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  NIC: {
    type: String,
    required: true,
  },
  bloodtype: {
    type: String,
  },
  gender: {
    type: String,
  },
  dob: {
    type: String,
  },
  telephone: {
    type: String,//changed in encryption phase
  },
  address: {
    type: String,
  },
});

const Donor = mongoose.model("Donor", donorSchema);

module.exports = Donor;
