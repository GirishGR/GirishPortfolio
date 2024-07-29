const mongoose = require('mongoose');

let ProductSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },

    mobile : {
        type : Number,
        required : true
    },
    
    email : {
        type : String,
        required : true
    },

    subject : {
        type : String,
        required : true
    },

    message : {
        type : String,
        required : true
    },
    
    created : {
        type : Date,
        default : Date.now
    }
});

let Product = mongoose.model('contactDetails' , ProductSchema);  //girish
module.exports = Product;
