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

routes.get('/signout', (req, res) => {
    res.clearCookie('user', { path: '/' });
    res.clearCookie('token', { path: '/' });
    return res.redirect('/');
})

routes.post('/signup', AuthController.signUp);
routes.post('/signin', AuthController.signIn);


module.exports = routes;