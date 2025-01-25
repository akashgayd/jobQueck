const mongoose = require('mongoose');
const contactUsSchema = new mongoose.Schema({

    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    Number:{
        type:Number,
        required:true
    },
    message:{
        type:String,
        required:true
    }
})
const Contactus = mongoose.model('Contactus', contactUsSchema);

module.exports = Contactus;
