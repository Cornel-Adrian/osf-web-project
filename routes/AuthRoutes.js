const express = require('express')
const routes = express.Router();
const AuthController = require("../controllers/AuthController");

routes.post('/signup', AuthController.signUp);
routes.post('/signin', AuthController.signIn);

module.exports = routes;