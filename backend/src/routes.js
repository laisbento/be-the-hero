const express = require('express');
const OngController = require('../src/controllers/OngController');
const IncidentController = require('../src/controllers/IncidentController');
const ProfileController = require('../src/controllers/ProfileController');
const SessionController = require('../src/controllers/SessionController');

const routes = express.Router();

//ongs routes
routes.get('/ongs', OngController.list);
routes.post('/ongs', OngController.create);

//login
routes.post('/sessions', SessionController.get);

//incidents per profile
routes.get('/profile', ProfileController.list);

//incidents routes
routes.get('/incidents', IncidentController.list);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);

module.exports = routes;