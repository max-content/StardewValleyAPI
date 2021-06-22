console.log("YOU ARE IN SEASONS ROUTES");

const SeasonController = require('../controllers/seasons.controller');

module.exports = function(app) {
    app.post('/api/seasons/add', SeasonController.createSeason);
    app.get('/api/seasons/all', SeasonController.allSeasons);
    app.get('/api/seasons/:id', SeasonController.getSeason);
    app.put('/api/seasons/:id', SeasonController.updateSeason);
    app.delete('/api/seasons/:id', SeasonController.deleteSeason);
}