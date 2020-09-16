const express = require('express')
const routes = express.Router();
const AuthController = require("../controllers/AuthController");


routes.get('/signin',(req, res)=>{
    res.render('signin');
});
routes.get('/signup', (req,res)=>{
    res.render('signup');
});
routes.post('/signup', AuthController.signUp);
routes.post('/signin', AuthController.signIn);

module.exports = routes;