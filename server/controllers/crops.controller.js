console.log("I am the Crop Controller");
const { request, response } = require("express");
const { model, modelNames } = require("mongoose");
const { Crop } = require("../models/crops.model");
const { Season } = require("../models/seasons.model");

const seasonDict = {
    winter: '605e115557c8fef7fe5b88fe',
    spring: '605e116057c8fef7fe5b88ff',
    summer: '605e116957c8fef7fe5b8900',
    fall: '605e116e57c8fef7fe5b8901'
};

const handleResponse = (err,result,resp) => err ? resp.status(400).json(err) : resp.json(result);

// module.exports = {
//     createBoard : async (req,resp) => {
//         await Board.create(req.body, (err,result) => handleResponse(err,result,resp));
//     },

// ==================Create Route =====================
module.exports = {
    createCrop :  (req, resp) => {

        const { name, growthPeriod, regrowthPeriod, seedCost, season} = req.body; //when you add to the model add to the deconstruction here

        console.log(req.body);
        const dictionary = seasonDict[season];

        Crop.create({
            name: name, 
            growthPeriod: growthPeriod, regrowthPeriod:regrowthPeriod, seedCost:seedCost, 
            season: dictionary
            //don't forget to also add any new field objects to the model here as well!
            // , (err, result) => handleResponse(err, result, resp)
        })
            .then(crop => Season.findOneAndUpdate({_id: dictionary}, {$push:{cropsProduced: crop}}, {new:true})
            .then(somethingElse => resp.json(crop)))
            .catch(err => resp.json(err));
        console.log("I'm in the create function!!!");

        //console.log(crop.name);
        //const didthiswork = Season.findOneAndUpdate({_id: dictionary}, {$push:{cropsProduced: crop}}, {new:true});
        //console.log(didthiswork);
    }
}

//module.exports.createCrop = async (req, res) => {
    // try{
    //     const { name, growthPeriod, season} = request.body;
    //     season = seasonDict[season];
    //     const crop = await Crop.create({name:name, growthPeriod:growthPeriod, season:season});
    //     //await crop.save();

    //     await Season.findOneAndUpdate({_id: season}, {$push:{cropsProduced: crop._id}})
    //     //season.cropsProduced.push(crop);
        
    //     //await season.save();

    //     //return new crop object after saving to season
    //     response.status(200).json({success:true, data: crop})
    // } catch (err) {
    //     response.status(400).json({success: false, message: err,message})
    // }
    //Crop.create(request.body)
    // .then(crop => response.json(crop))
    // .catch(err => response.json(err));

// ==================Show All Crops =====================
module.exports.allCrops = (request, response) => Crop.find({})
    .then(crop => response.json(crop))
    .catch(err => response.json(err));

// ==================Show by ID =====================
module.exports.getCrop = (request, response) => {
    Crop.findOne({_id:request.params.id})
        .then(crop => response.json(crop))
        .catch(err => response.json(err))
}

// ==================Edit By ID =====================
module.exports.updateCrop = (request, response) => {
    Crop.findOneAndUpdate({_id: request.params.id}, request.body, {new:true})
    .then(updatedCrop => response.json(updatedCrop))
    .catch(err => response(err))
    console.log(updatedCrop);
}

// ================== Delete by ID =====================
module.exports.deleteCrop= (request, response) => {
    Crop.deleteOne({_id: request.params.id})
    .then(deleteConfirmation => response.json(deleteConfirmation))
    .catch(err => response.json(err))
}