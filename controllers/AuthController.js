const authService = require('../services/AuthServices');

async function signUp(req, res, next) {
    await authService.signUp(req, res, next);
    return res.redirect('signin');
}

async function signIn(req, res, next) {
    await authService.signIn(req, res, next);
    return res.redirect('/');
}

async function signOut(req, res, next) {
    await authService.signOut(req, res, next);
    return res.redirect('/');
}
function userDetails(req, res) {
    const user = req.cookies.user || "";
    return res.render('user', { user: user});
}

module.exports = {
    signIn: signIn,
    signUp: signUp,
    signOut: signOut,
    userDetails: userDetails,
}