const { axiosInstance, SECRETKEYURL, getHeader, SECRETKEY } = require("../helpers/HttpRequests");


async function getOrders(req) {
    let orderResponse;
    let header = getHeader(req.cookies.token);
    await axiosInstance.get("orders?" + SECRETKEYURL, {
        headers: header
    }).then((res) => {
        orderResponse = res.data;
    }).catch((error) => {
        if(error.response.data.error == 'There are no orders for this user')
        {
            return orderResponse;
        }
        throw new Error (error);
    });
    return orderResponse;
}

async function createOrder(req){
    let orderCreateResponse;
    let header = getHeader(req.cookies.token);
    await axiosInstance({
        method: 'post',
        url:'orders',
        data:{
            secretKey: SECRETKEY,
            address: req.body.address,
            paymentId: req.body.paymentId,
            items: req.body.items
        },
        headers: header
    }).then((res)=>{
        orderCreateResponse = res.data;
    }).catch((error)=>{
        throw new Error (error);
    })
    return orderCreateResponse;
}


module.exports = {
    getOrders: getOrders,
    createOrder: createOrder

}
