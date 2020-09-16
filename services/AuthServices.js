const { axiosInstance, SECRETKEY, bcrypt } = require("../helpers/HttpRequests");

async function signUp(req, res) {
    let authSignUp;
    let hassedPassword;
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
    }).then((res) => {
        authSignUp = res.data;
        console.log(authSignUp);
    }).catch((error) => {
    }).then(() => {
    });
}

async function signIn(req) {
    let hassedPassword;
    try {
        hassedPassword = await bcrypt.hash(req.body.password, 10);
    }
    catch (error) {
        throw new Error(error);
    }
    let authSignIn;
    await axiosInstance.post("auth/signup", {
        email: req.body.email,
        password: hassedPassword,
        secretKey: SECRETKEY
    }).then((res) => {
        authSignIn = res.data;
        console.log(authSignIn);
    }).catch((error) => {
        throw new Error(error);
    });
}

module.exports = {
    signUp: signUp,
    signIn: signIn
}
