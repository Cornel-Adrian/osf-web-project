const axios = require('axios');
const BASEURL = process.env.BASEURL || "localhost.com";
const SECRETKEY = process.env.SECRETKEY || "secretLey";
const SECREKEYURL = "secretKey=" + SECRETKEY;
const axiosInstance = axios.create({
    baseURL: BASEURL
})

module.exports = {
    SECRETKEYURL : SECREKEYURL,
    axiosInstance : axiosInstance,
    SECRETKEY: SECREKEY
}