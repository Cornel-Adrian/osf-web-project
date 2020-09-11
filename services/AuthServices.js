const { axios, BASEURL } = require("../helpers/httpRequests");

async function signUp(jsonBody) {
    try {
        let authSignUp = await axios.post(BASEURL + "/signup", + jsonBody);
        return authSignUp;
    }
    catch (err) {
        throw err;
    }
}

async function signIn(jsonBody) {
    try {
        let authSignIn = await axios.post(BASEURL + "/signin", + jsonBody);
        return authSignIn;
    }
    catch (err) {
        throw err;
    }
}

module.exports = {
    signUp: signUp,
    signIn: signIn
}
