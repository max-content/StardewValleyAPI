console.log("I am the Mineral Controller");
const { request, response } = require("express");
const { model, modelNames } = require("mongoose");
const { Mineral } = require("../models/minerals.model");

// ==================Create Route =====================
module.exports.createMineral = (request, response) => {
    Mineral.create(request.body)
    .then(mineral => response.json(mineral))
    .catch(err => response.json(err));
}

// ==================Show All Minerals =====================
module.exports.allMinerals = (request, response) => Mineral.find({})
    .then(mineral => response.json(mineral))
    .catch(err => response.json(err));

// ==================Show by ID =====================
module.exports.getMineral = (request, response) => {
    Mineral.findOne({_id:request.params.id})
        .then(mineral => response.json(mineral))
        .catch(err => response.json(err))
}

// ==================Edit By ID =====================
module.exports.updateMineral = (request, response) => {
    Mineral.findOneAndUpdate({_id: request.params.id}, request.body, {new:true})
    .then(updatedMineral => response.json(updatedMineral))
    .catch(err => response(err))
}

// ================== Delete by ID =====================
module.exports.deleteMineral = (request, response) => {
    Mineral.deleteOne({_id: request.params.id})
    .then(deleteConfirmation => response.json(deleteConfirmation))
    .catch(err => response.json(err))
}