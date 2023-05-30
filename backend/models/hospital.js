const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");
const hospitalSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  district: {
    type: String, 
  },
  name: {
    type: String,
  },
  telephone: {  
    type: String,
  },
  address: {
    type: String,
  },
});
hospitalSchema.pre("save", async function () {
  this.password = await bcrypt.hash(this.password, 12);
});
const hospital = mongoose.model("hospital", hospitalSchema);

module.exports = hospital;
