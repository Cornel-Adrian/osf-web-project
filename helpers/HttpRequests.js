const axios = require('axios');
const BASEURL = process.env.BASEURL || "localhost.com";
const SECRETKEY = process.env.SECRETKEY || "secretKey";
const SECRETKEYURL = "secretKey=" + SECRETKEY;
const axiosInstance = axios.create({
    baseURL: BASEURL,
    headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        "Access-Control-Allow-Origin": "*",
    }
})
const bcrypt = require('bcrypt');

module.exports = {
    SECRETKEYURL: SECRETKEYURL,
    axiosInstance: axiosInstance ,
    SECRETKEY : SECRETKEY,
    bcrypt: bcrypt
}