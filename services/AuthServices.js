const { axiosInstance, SECRETKEY, bcrypt } = require("../helpers/HttpRequests");

async function signUp(req) {
    let authSignUp, hassedPassword;
    console.log("Register");
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
        console.log(res);
    }).catch((error) => {
    }).then(() => {
    });
    req.session.user = req.body.email;
}

async function signIn(req) {
    let authSignIn, hassedEmail, hassedPassword;
    req.session.user = req.body.email;
    console.log("Login");
    try {
        hassedEmail = await bcrypt.hash(req.body.email, 10);
        hassedPassword = await bcrypt.hash(req.body.password, 10);
    }
    catch (error) {
        throw new Error(error);
    }
    console.log("Email: " + hassedEmail + " Password: " + hassedPassword);

    await axiosInstance({
        method: 'post',
        url: 'auth/signin',
        data: {
            email: req.body.email,
            password: req.body.password,
            secretKey: SECRETKEY
        }
    }).then((res)=>{
        authSignIn = res.data;
        req.session.token = authSignIn.token;
        console.log(authSignIn);
        console.log(req.session.token);
    }).catch((error)=>{
        console.log("Not Logged In");
    })
    console.log(req.session.user + "outside await");
    console.log(req.session.token + "outside await");
}

module.exports = {
    signUp: signUp,
    signIn: signIn
}
