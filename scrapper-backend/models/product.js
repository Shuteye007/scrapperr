const mongoose = require('mongoose')
const {ObjectId} = mongoose.Schema;

const productSchema = new mongoose.Schema({
    

  
    title: {
        type: String,
        required: true,
        text: true
    },

    price: {
        type: String,
        trim: true,
        required: true,
        
    },


}, )

module.exports = mongoose.model('Product', productSchema)