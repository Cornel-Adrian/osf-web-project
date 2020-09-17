const authService = require('../services/AuthServices');

async function signUp(req, res) {
    const user = await authService.signUp(req);
    return res.redirect('signin');

}

async function signIn(req, res) {
    const user = await authService.signIn(req);
    return res.redirect('/');
}

module.exports = {
    signIn: signIn,
    signUp: signUp
}