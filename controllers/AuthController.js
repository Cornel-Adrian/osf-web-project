const authService = require('../services/AuthServices');

async function signUp(req, res, next) {
    await authService.signUp(req, res, next);
    return res.redirect('signin');

}

async function signIn(req, res, next) {
    await authService.signIn(req, res, next);
    return res.redirect('/');
}

module.exports = {
    signIn: signIn,
    signUp: signUp
}