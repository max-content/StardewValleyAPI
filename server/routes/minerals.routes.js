console.log("YOU ARE IN MINERAL ROUTES");

const MineralController = require('../controllers/minerals.controller');

module.exports = function(app) {

    app.post('/api/mining/minerals/add', MineralController.createMineral);
    app.get('/api/mining/minerals/all', MineralController.allMinerals);
    app.get('/api/mining/minerals/:id', MineralController.getMineral);
    app.put('/api/mining/minerals/:id', MineralController.updateMineral);
    app.delete('/api/mining/minerals/:id', MineralController.deleteMineral);
}