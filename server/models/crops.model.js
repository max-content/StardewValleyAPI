const mongoose = require('mongoose');

const CropsSchema = new mongoose.Schema({
    name: {
        type: String
    },
    growthPeriod: {
        type: String,
    },
    seedCost: { //currently just pierre's prices
        type: String,
    },
    regrowthPeriod: {
        type: String
    },
    season: {
       type: mongoose.Schema.Types.ObjectId,
       ref: 'Season',
       required: true
    }
 },
 {timestamps: true});
 
 module.exports.Crop = mongoose.model('Crop', CropsSchema);

 //winter id 605e115557c8fef7fe5b88fe
 //spring id 605e116057c8fef7fe5b88ff
 //summer id 605e116957c8fef7fe5b8900
 //fall id 605e116e57c8fef7fe5b8901


 //to add later: multiple prices points (different prices for different purchase locations ie jojamart, pierre's, carts), healing and energy effects, rarity star value increases, boolean: people who like item as a gift and who don't, people who love the gift, number of times crops will produce per season, how to deal with crops that can be grown in more than one season