const mongoose = require('mongoose');

const SeasonsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please enter the season"],
    },
    cropsProduced: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Crop'
    }]
}, 
{timestamps: true });

module.exports.Season = mongoose.model('Season', SeasonsSchema);