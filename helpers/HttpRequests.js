const axios = require('axios');
const BASEURL = process.env.BASEURL || "localhost.com";
const SECRETKEY = process.env.SECRETKEY || "secretKey";
const SECRETKEYURL = "secretKey=" + SECRETKEY;
const axiosInstance = axios.create({
    baseURL: BASEURL
})
const bcrypt = require('bcrypt');

module.exports = {
    SECRETKEYURL: SECRETKEYURL,
    axiosInstance: axiosInstance ,
    SECRETKEY : SECRETKEY,
    bcrypt: bcrypt
}