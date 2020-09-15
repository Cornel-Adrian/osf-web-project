const authService = require('../services/AuthServices');

async function signUp(req, res) {
    const user = await authService.signUp(req);
    return res.render('index',{user: user});
}

async function signIn(req, res) {
    const user = await authService.signUp(req);
    return res.render('index',{user: user});
}

module.exports = {
    signIn : signIn,
    signUp : signUp
}