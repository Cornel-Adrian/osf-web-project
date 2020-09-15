const { axiosInstance, BASEURL, SECRETKEY } = require("../helpers/HttpRequests");

async function signUp(req) {
    let user = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        secretKey: SECRETKEY
    }
    user = JSON.stringify(user);
    let authSignUp;
    await axiosInstance.post(BASEURL + "auth/signup", user).then((res) => {
        authSignUp = res.data;
    }).catch((error) => {
        if (error)
        {

        }
    }).then(() => {

    });
    return authSignUp;
}

async function signIn(req) {
    let user = {
        email: req.body.email,
        password: req.body.password,
        secretKey: SECRETKEY
    }
    user = JSON.stringify(user);
    let authSignIn;
    await axiosInstance.post(BASEURL + "auth/signup", user).then((res) => {
        authSignIn = res.data;
    }).catch((error) => {
        throw new Error(error);
    });
    return authSignIn;
}

module.exports = {
    signUp: signUp,
    signIn: signIn
}
