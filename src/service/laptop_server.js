const laptopService = require("../pb/laptop_service_pb");
const laptopStore = require("../store/laptop_store");
const grpc = require("@grpc/grpc-js");
const util = require("util");

const setIntervalSync = (callback) => {
    setTimeout(callback,8000);
};
const createLaptop = async (call, callback) => {
    try {
        await util.promisify(setIntervalSync)();
        if (call.cancelled == true) {
            console.log("cancelled from the client");
           return callback({
                code:grpc.status.CANCELLED,
                message:"Request cancelled fromt the client"
            });
        }
        const laptop = call.request.getLaptop();
        console.log("incoming request",laptop.getId());
        await laptopStore.saveLaptop(laptop);
        const response = new laptopService.CreateLaptopResponse();
        response.setId(laptop);
        console.log("laptop saved successfully");
        callback(null,response);
    } catch (e) {
        callback({
            code:grpc.status.INVALID_ARGUMENT,
            message:e
        });
    }
};
module.exports = createLaptop;