// GENERATED CODE -- DO NOT EDIT!

"use strict";
var grpc = require("@grpc/grpc-js");
var laptop_service_pb = require("./laptop_service_pb.js");
var laptop_message_pb = require("./laptop_message_pb.js");

function serialize_CreateLaptopRequest(arg) {
  if (!(arg instanceof laptop_service_pb.CreateLaptopRequest)) {
    throw new Error("Expected argument of type CreateLaptopRequest");
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_CreateLaptopRequest(buffer_arg) {
  return laptop_service_pb.CreateLaptopRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_CreateLaptopResponse(arg) {
  if (!(arg instanceof laptop_service_pb.CreateLaptopResponse)) {
    throw new Error("Expected argument of type CreateLaptopResponse");
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_CreateLaptopResponse(buffer_arg) {
  return laptop_service_pb.CreateLaptopResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var LaptopServiceService = exports.LaptopServiceService = {
  createLaptop: {
    path: "/LaptopService/CreateLaptop",
    requestStream: false,
    responseStream: false,
    requestType: laptop_service_pb.CreateLaptopRequest,
    responseType: laptop_service_pb.CreateLaptopResponse,
    requestSerialize: serialize_CreateLaptopRequest,
    requestDeserialize: deserialize_CreateLaptopRequest,
    responseSerialize: serialize_CreateLaptopResponse,
    responseDeserialize: deserialize_CreateLaptopResponse,
  },
};

exports.LaptopServiceClient = grpc.makeGenericClientConstructor(LaptopServiceService);
