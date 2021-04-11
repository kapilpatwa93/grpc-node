const grpc = require("@grpc/grpc-js");

const laptopService = require("./src/pb/laptop_service_grpc_pb");
const laptopServer = require("./src/service/laptop_server.js");
const server = new grpc.Server();

server.addService(laptopService.LaptopServiceService,{createLaptop:laptopServer});
server.bindAsync("0.0.0.0:8080", grpc.ServerCredentials.createInsecure(), () => {
    console.log("server start on 0.0.0.0:8080");
    server.start();
});