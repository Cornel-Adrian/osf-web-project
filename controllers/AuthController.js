const authService = require('../services/AuthServices');

async function signUp(req, res) {
    const returnFromService = await authService.signUp(req);
    return res.status(200).send(returnFromService);
}

async function signIn(req, res) {
    const returnFromService = await authService.signUp(req);
    return res.status(200).send(returnFromService);
}

module.exports = {
    signIn : signIn,
    signUp : signUp
}