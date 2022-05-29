const express = require('express');

const routes = express.Router();

const Usuario = require('./controllers/usuarios.controller')

routes.get('/api/usuarios',Usuario.index)
routes.post('/api/usuarios',Usuario.create)


module.exports = routes;
