const axios = require('axios');
const BASEURL = process.env.BASEURL || "localhost.com";
const SECRETKEY = process.env.SECRETKEY || "secretLey";
const SECRETKEYURL = "secretKey=" + SECRETKEY;
const axiosInstance = axios.create({
    baseURL: BASEURL
})

module.exports = {
    SECRETKEYURL: SECRETKEYURL,
    axiosInstance: axiosInstance ,
    SECRETKEY : SECRETKEY
}