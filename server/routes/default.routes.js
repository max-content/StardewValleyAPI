console.log("YOU ARE IN HOME ROUTES");

const DefaultController = require('../controllers/default.controller');

module.exports = function(app) {
    app.get('/api', DefaultController.index);
    //any functionality tests of the api put those routes here. 

}