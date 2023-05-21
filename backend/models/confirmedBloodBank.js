const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const bloodBankSchema = new Schema({
    username: {
        type : String,
        required: true
    },
    password:{
        type: String,
        required:true
    },
    district:{
        type:String
    },
    name:{
        type:String
    },
    telephone:{
        type:Number
    },
    address:{
        type:String
    }
})

const cBloodBank = mongoose.model("confirnedBloodBank",bloodBankSchema);

module.exports = cBloodBank;