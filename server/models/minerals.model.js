//People being plural this model is called "Mineral"
const mongoose = require('mongoose');

const MineralSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please provide a name"]
    }, 
    category: {
        type: String,
        required: [true, "Please provide a category"]
    },
    sellPrice: {
        type: String,
    },
    description: {
        type: String,
    },
    location: {
        type: String,
    },
    usedIn: {
        type: String,
    }
 }, {timestamps: true});
 module.exports.Mineral = mongoose.model('Mineral', MineralSchema);