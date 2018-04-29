const mongoose = require('mongoose');
const foodSchema = new mongoose.Schema({
    foodType: {
        type: String,
        trim: true
    },
    name: {
        type: String,
        trim: true
    },
    goodFor: {
        type: String,
        trim:true
    }
});

const Food = mongoose.model('Food', foodSchema);
module.exports = Food;