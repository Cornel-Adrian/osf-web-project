const { axiosInstance, SECRETKEY, bcrypt } = require("../helpers/HttpRequests");

async function signUp(req, res) {
    let user = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        secretKey: SECRETKEY
    }
    user = JSON.stringify(user);
    let authSignUp;
    await axiosInstance.post("auth/signup", user).then((res) => {
        authSignUp = res.data;
    }).catch((error) => {
    }).then(() => {

    });
}

async function signIn(req, res) {
    let user = {
        email: req.body.email,
        password: await bcrypt.hash(req.body.password, 10),
        secretKey: SECRETKEY
    }
    user = JSON.stringify(user);
    console.log(user);
    let authSignIn;
    await axiosInstance.post("auth/signup", user).then((res) => {
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
