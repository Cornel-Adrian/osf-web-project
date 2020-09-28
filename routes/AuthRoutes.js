const express = require('express')
const routes = express.Router();
const AuthController = require("../controllers/AuthController");
const { validateCookies } = require('../helpers/HttpRequests');


routes.get('/signin', (req, res) => {
    res.render('signin');
});
routes.get('/signup', (req, res) => {
    res.render('signup');
});
routes.get('/user', validateCookies, AuthController.userDetails);

routes.get('/signout', AuthController.signOut);
routes.post('/signup', AuthController.signUp);
routes.post('/signin', AuthController.signIn);


module.exports = routes;