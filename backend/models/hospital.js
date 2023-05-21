const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const hospitalSchema = new Schema({
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

const hospital = mongoose.model("hospital",hospitalSchema);

module.exports = hospital;
