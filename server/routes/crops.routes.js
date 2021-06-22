console.log("YOU ARE IN CROP ROUTES");

const CropController = require('../controllers/crops.controller');

module.exports = function(app) {

    app.post('/api/farming/crops/add', CropController.createCrop);
    app.get('/api/farming/crops/all', CropController.allCrops);
    app.get('/api/farming/crops/:id', CropController.getCrop);
    app.put('/api/farming/crops/:id', CropController.updateCrop);
    app.delete('/api/farming/crops/:id', CropController.deleteCrop);
}