const authService = require('../services/AuthServices');

async function signUp(req, res) {
    const user = await authService.signUp(req, res);
    return res.redirect('index');
}

async function signIn(req, res) {
    const user = await authService.signUp(req,res);
    return res.redirect('index');
}

module.exports = {
    signIn : signIn,
    signUp : signUp
}