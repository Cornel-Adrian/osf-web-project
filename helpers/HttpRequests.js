const axios = require('axios');
const BASEURL = process.env.BASEURL || "localhost.com";
const SECRETKEY = process.env.SECRETKEY || "secretKey";
const SECRETKEYURL = "secretKey=" + SECRETKEY;
const axiosInstance = axios.create({
    baseURL: BASEURL
})
const bcrypt = require('bcrypt');

function getHeader(token) {
    return { 'authorization': 'Bearer ' + token }
}


function getHeaderWithJson(token) {
    return {
        'authorization': 'Bearer ' + token,
        'Content-Type': 'application/json'
    }
}


function validateCookies(req, res, next) {
    const { cookies } = req;
    if ('user' in cookies) {
        if (cookies.token) {
            next();
        }
        else return res.status(401).render('error', { error: 'Not Authentificated' });
    } else return res.status(401).render('error', { error: 'Not Authentificated' });
}

module.exports = {
    SECRETKEYURL: SECRETKEYURL,
    axiosInstance: axiosInstance,
    SECRETKEY: SECRETKEY,
    bcrypt: bcrypt,
    getHeader: getHeader,
    validateCookies: validateCookies,
    getHeaderWithJson: getHeaderWithJson
}