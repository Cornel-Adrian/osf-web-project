const authService = require('../services/AuthServices');

function signUp(req, res) {
    let user = {name:req.params.name, email:req.params.email, password:req.params.password, secretKey:req.params.secretKey}
    user = JSON.stringify(user);
    const returnFromService = authService.signUp(user);
    return res.status(200).send(returnFromService);
}

function signIn(req, res) {
    let user = {email:req.params.email, password:req.params.password, secretKey:req.params.secretKey}
    user = JSON.stringify(user);
    const returnFromService = authService.signUp(user);
    return res.status(200).send(returnFromService);
}

module.exports = {
    signIn = signIn,
    signUp = signUp
}