console.log("I am the Default Controller");
const { request, response } = require("express");
// const { model, modelNames } = require("mongoose");
// const { Person } = require("../models/people.model");

// ==================Index Hello World =====================
module.exports.index = (request, response) => {
    response.json({
       message: "Hello World"
    });
}