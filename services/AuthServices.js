const { axiosInstance, SECRETKEY, bcrypt } = require("../helpers/HttpRequests");

async function signUp(req, res, next) {
    if (!req.body) {
        next();
    }

    await axiosInstance.post("auth/signup", {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        secretKey: SECRETKEY
    }).then((response) => {
        return;
    }).catch((error) => {
        next('Email Adress incorect');
    });
}

async function signIn(req, res, next) {
    let authSignIn;
    if (!req.body) {
        return next();
    }
    await axiosInstance.post('auth/signin',
        {
            email: req.body.email,
            password: req.body.password,
            secretKey: SECRETKEY
        }
    ).then((response) => {
        authSignIn = response.data;
        res.cookie('user', authSignIn.user, { maxAge: 9000000 });
        res.cookie('token', authSignIn.token, { maxAge: 9000000 });
    }).catch((error) => {
        next(error);
    })
}

async function signOut(req, res, next) {
    if (req.cookies.token) {
        res.clearCookie('user', { path: '/' });
        res.clearCookie('token', { path: '/' });
    }
}

module.exports = {
    signUp: signUp,
    signIn: signIn,
    signOut: signOut
}