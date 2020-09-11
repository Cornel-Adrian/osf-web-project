const express = require('express')
const routes = express.Router();
const AuthController = require('../controllers/AuthController');

routes.get('/signup', AuthController.signUp);
routes.get('/signin', AuthController.signIn);

module.exports = routes;