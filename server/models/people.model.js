//People being plural this model is called "Person"
const mongoose = require('mongoose');

const PeopleSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please provide a name"],
        minlength: [3, "This name must be at least 3 characters"]
    }, 
    canMarry: {
        type: Boolean,
        required: [true, "Please enter true or false"],
    },
    canGift: {
        type: Boolean,
        required: [true, "please enter true or false"]
    },
    about: {
        type: String
    },
    gender: {
        type: String
    },
    address: {
        type: String,
    },
 }, {timestamps: true});
 module.exports.Person = mongoose.model('Person', PeopleSchema);