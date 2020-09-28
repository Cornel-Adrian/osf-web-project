const axios = require('axios');
const BASEURL = process.env.BASEURL;
const SECRETKEY = process.env.SECRETKEY;
const SECRETKEYURL = "secretKey=" + SECRETKEY;
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const axiosInstance = axios.create({
    baseURL: BASEURL
})
const bcrypt = require('bcrypt');

function getHeader(token) {
    return { 'authorization': 'Bearer ' + token }
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



//Stripe integration 
async function stripePayment(req, res) {
    const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items: [
            {
                price_data: {
                    currency: 'usd',
                    product_data: {
                        name: 'T-shirt',
                    },
                    unit_amount: 2000,
                },
                quantity: 1,
            },
        ],
        mode: 'payment',
        success_url: 'https://example.com/success',
        cancel_url: 'https://example.com/cancel',
    });

    res.json({ id: session.id });
};

module.exports = {
    SECRETKEYURL: SECRETKEYURL,
    axiosInstance: axiosInstance,
    SECRETKEY: SECRETKEY,
    bcrypt: bcrypt,
    getHeader: getHeader,
    validateCookies: validateCookies,
    stripePayment: stripePayment
}