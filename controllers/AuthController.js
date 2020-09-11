const authService = require('../services/AuthServices');

function signUp(req, res, next){
    const returnFromService = authService.signUp();
    return req.status(200).send(returnFromService);
}

function signIn(req, res, next){
    const returnFromService = authService.signIn();
    return req.status(200).send(returnFromService);
}

module.exports = {
    signIn = signIn,
    signUp = signUp
}