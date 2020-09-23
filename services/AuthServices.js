const { axiosInstance, SECRETKEY, bcrypt } = require("../helpers/HttpRequests");

async function signUp(req, res, next) {
    let authSignUp, hassedPassword;
    try {
        hassedPassword = await bcrypt.hash(req.body.password, 10);
    }
    catch (error) {
        next(error);
    }

    await axiosInstance.post("auth/signup", {
        name: req.body.name,
        email: req.body.email,
        password: hassedPassword,
        secretKey: SECRETKEY
    }).then((response) => {
        authSignUp = response.data;
    }).catch((error) => {
        next(error);
        res.render('error', {error: error.response.data.error});
    }).then(() => {
    });
}

async function signIn(req, res, next) {
    let authSignIn, hassedEmail, hassedPassword;
    try {
        hassedEmail = await bcrypt.hash(req.body.email, 10);
        hassedPassword = await bcrypt.hash(req.body.password, 10);
    }
    catch (error) {
        throw error;
    }
    await axiosInstance({
        method: 'post',
        url: 'auth/signin',
        data: {
            email: req.body.email,
            password: req.body.password,
            secretKey: SECRETKEY
        }
    }).then((response) => {
        authSignIn = response.data;
        res.cookie('user', authSignIn.user, { maxAge: 900000, httpOnly: true });
        res.cookie('token', authSignIn.token, { maxAge: 900000, httpOnly: true });
    }).catch((error) => {
        next(error);
        res.render('error', {error: error.response.data.error});
    })
}

module.exports = {
    signUp: signUp,
    signIn: signIn
}