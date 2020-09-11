const axios = require('axios');
const BASEURL = process.config.BASEURL || "localhost.com";

module.exports = {
    axios = axios,
    BASEURL = BASEURL
}