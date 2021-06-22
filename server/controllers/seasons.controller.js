console.log("I am the Season Controller");
const { request, response } = require("express");
const { model, modelNames } = require("mongoose");
const { Season } = require("../models/seasons.model");
//const { Crop } = require("../models/crops.models");

// ==================Create Route =====================
module.exports.createSeason = (request, response) => {
    Season.create(request.body)
    .then(season => response.json(season))
    .catch(err => response.json(err));
}

// ==================Show All Seasons =====================
module.exports.allSeasons = (request, response) => Season.find({})
    .then(season => response.json(season))
    .catch(err => response.json(err));

// ==================Show by ID =====================
module.exports.getSeason = (request, response) => {
    Season.findOne({_id:request.params.id})
        .populate({ path: 'cropsProduced'})
        .then(season => response.json(season))
        .catch(err => response.json(err))
}

// ==================Edit By ID =====================
module.exports.updateSeason = (request, response) => {
    Season.findOneAndUpdate({_id: request.params.id}, request.body, {new:true})
    .then(updatedSeason => response.json(updatedSeason))
    .catch(err => response(err))
}

// ================== Delete by ID =====================
module.exports.deleteSeason = (request, response) => {
    Season.deleteOne({_id: request.params.id})
    .then(deleteConfirmation => response.json(deleteConfirmation))
    .catch(err => response.json(err))
}