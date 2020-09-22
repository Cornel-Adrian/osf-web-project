const { axiosInstance, SECRETKEY, bcrypt } = require("../helpers/HttpRequests");

async function signUp(req, res) {
    let authSignUp, hassedPassword;
    try {
        hassedPassword = await bcrypt.hash(req.body.password, 10);
    }
    catch (error) {
        throw new Error(error);
    }

    await axiosInstance.post("auth/signup", {
        name: req.body.name,
        email: req.body.email,
        password: hassedPassword,
        secretKey: SECRETKEY
    }).then((response) => {
        authSignUp = response.data;
    }).catch((error) => {
    }).then(() => {
    });
}

async function signIn(req, res) {
    let authSignIn, hassedEmail, hassedPassword;
    try {
        hassedEmail = await bcrypt.hash(req.body.email, 10);
        hassedPassword = await bcrypt.hash(req.body.password, 10);
    }
    catch (error) {
        throw error;
    }
    try {
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
            if (error.response.data.error === "Invalid Password" || error.response.data.error === "User not found") {
                return res.status(400).render('signin', { error: error });
            }
        })
    }
    catch( error)
    {
        res.render('sigin', { error: error });
    }
}

module.exports = {
    signUp: signUp,
    signIn: signIn
}