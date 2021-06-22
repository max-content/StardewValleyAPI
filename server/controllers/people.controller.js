console.log("I am the People Controller");
const { request, response } = require("express");
const { model, modelNames } = require("mongoose");
const { Person } = require("../models/people.model");

// ==================Create Route =====================
module.exports.createPerson = (request, response) => {
    Person.create(request.body)
    .then(person => response.json(person))
    .catch(err => response.json(err));
}

// ==================Show All People =====================
module.exports.allPeople = (request, response) => Person.find({})
    .then(person => response.json(person))
    .catch(err => response.json(err));

// ==================Show by ID =====================
module.exports.getPerson = (request, response) => {
    Person.findOne({_id:request.params.id})
        .then(person => response.json(person))
        .catch(err => response.json(err))
}

// ==================Edit By ID =====================
module.exports.updatePerson = (request, response) => {
    Person.findOneAndUpdate({_id: request.params.id}, request.body, {new:true})
    .then(updatedPerson => response.json(updatedPerson))
    .catch(err => response(err))
}

// ================== Delete by ID =====================
module.exports.deletePerson = (request, response) => {
    Person.deleteOne({_id: request.params.id})
    .then(deleteConfirmation => response.json(deleteConfirmation))
    .catch(err => response.json(err))
}