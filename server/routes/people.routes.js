console.log("YOU ARE IN PEOPLE ROUTES");

const PeopleController = require('../controllers/people.controller');

module.exports = function(app) {
    app.post('/api/people/add', PeopleController.createPerson);
    app.get('/api/people/all', PeopleController.allPeople);
    app.get('/api/people/:id', PeopleController.getPerson);
    app.put('/api/people/:id', PeopleController.updatePerson);
    app.delete('/api/people/:id', PeopleController.deletePerson);
}