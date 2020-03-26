const express = require('express');
const crypto = require('crypto');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');

const routes = express.Router();
/**
 * Ongs
 */
routes.post('/ongs', OngController.create);
routes.get('/ongs', OngController.index);

/**
 * Incidents
 */

 routes.post('/incidents', IncidentController.create);
 routes.get('/incidents', IncidentController.index);

module.exports = routes;
