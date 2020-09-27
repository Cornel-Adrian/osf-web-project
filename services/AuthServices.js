const { axiosInstance, SECRETKEY, bcrypt } = require("../helpers/HttpRequests");

async function signUp(req, res, next) {
    let hassedPassword;
    try {
        if (!req.body) {
            throw new Error("Missing Body");
        }
        hassedPassword = await bcrypt.hash(req.body.password, 10);

        await axiosInstance.post("auth/signup", {
            name: req.body.name,
            email: req.body.email,
            password: hassedPassword,
            secretKey: SECRETKEY
        }).then((response) => {
        }).catch((error) => {
            throw new Error(error);
        }).then(() => {
        });
    }
    catch (error) {
        next(error);
    }
}

async function signIn(req, res, next) {
    let authSignIn, hassedEmail, hassedPassword;
    if (!req.body) {
        return next();
    }

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
        res.cookie('user', authSignIn.user, { maxAge: 9000000, httpOnly: true });
        res.cookie('token', authSignIn.token, { maxAge: 9000000, httpOnly: true });
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