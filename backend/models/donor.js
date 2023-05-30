const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

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
    type: String, //changed in encryption phase
  },
  address: {
    type: String,
  },
});
donorSchema.pre("save", async function () {
  this.password = await bcrypt.hash(this.password, 12);
});
const Donor = mongoose.model("Donor", donorSchema);

module.exports = Donor;
