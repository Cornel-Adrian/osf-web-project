const authService = require('../services/AuthServices');

async function signUp(req, res) {
    const user = await authService.signUp(req, res);
    return res.redirect('signin');

}

async function signIn(req, res) {
    const user = await authService.signUp(req, res);
    return res.redirect('/');
}

module.exports = {
    signIn: signIn,
    signUp: signUp
}