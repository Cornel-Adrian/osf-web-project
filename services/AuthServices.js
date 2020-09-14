const { axiosInstance, BASEURL, SECRETKEY } = require("../helpers/HttpRequests");

async function signUp(req) {
    console.log("Auth Service")
    let user = {
        name: req.params.name,
        email: req.params.email,
        password: req.params.password,
        secretKey: SECRETKEY
    }
    user = JSON.stringify(user);
    console.log(user);
    let authSignUp;
    await axiosInstance.post(BASEURL + "auth/signup", user).then((res) => {
        authSignUp = res.data;
        console.log(res);
    }).catch((error) => {
        throw new Error(error);
    }).then(() => {

    });
    return authSignUp;
}

async function signIn(req) {
    let user = {
        email: req.params.email,
        password: req.params.password,
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
