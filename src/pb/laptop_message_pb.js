// source: laptop_message.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var processor_message_pb = require('./processor_message_pb.js');
goog.object.extend(proto, processor_message_pb);
var keyboard_message_pb = require('./keyboard_message_pb.js');
goog.object.extend(proto, keyboard_message_pb);
var memory_message_pb = require('./memory_message_pb.js');
goog.object.extend(proto, memory_message_pb);
var screen_message_pb = require('./screen_message_pb.js');
goog.object.extend(proto, screen_message_pb);
var storage_message_pb = require('./storage_message_pb.js');
goog.object.extend(proto, storage_message_pb);
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
goog.object.extend(proto, google_protobuf_timestamp_pb);
goog.exportSymbol('proto.Laptop', null, global);
goog.exportSymbol('proto.Laptop.WeightCase', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.Laptop = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.Laptop.repeatedFields_, proto.Laptop.oneofGroups_);
};
goog.inherits(proto.Laptop, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.Laptop.displayName = 'proto.Laptop';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.Laptop.repeatedFields_ = [6,7];

/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.Laptop.oneofGroups_ = [[10,11]];

/**
 * @enum {number}
 */
proto.Laptop.WeightCase = {
  WEIGHT_NOT_SET: 0,
  WEIGHT_KG: 10,
  WEIGHT_LB: 11
};

/**
 * @return {proto.Laptop.WeightCase}
 */
proto.Laptop.prototype.getWeightCase = function() {
  return /** @type {proto.Laptop.WeightCase} */(jspb.Message.computeOneofCase(this, proto.Laptop.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Laptop.prototype.toObject = function(opt_includeInstance) {
  return proto.Laptop.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Laptop} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Laptop.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    brand: jspb.Message.getFieldWithDefault(msg, 2, ""),
    name: jspb.Message.getFieldWithDefault(msg, 3, ""),
    cpu: (f = msg.getCpu()) && processor_message_pb.CPU.toObject(includeInstance, f),
    ram: (f = msg.getRam()) && memory_message_pb.Memory.toObject(includeInstance, f),
    gpusList: jspb.Message.toObjectList(msg.getGpusList(),
    processor_message_pb.GPU.toObject, includeInstance),
    storagesList: jspb.Message.toObjectList(msg.getStoragesList(),
    storage_message_pb.Storage.toObject, includeInstance),
    screen: (f = msg.getScreen()) && screen_message_pb.Screen.toObject(includeInstance, f),
    keyboard: (f = msg.getKeyboard()) && keyboard_message_pb.Keyboard.toObject(includeInstance, f),
    weightKg: jspb.Message.getFloatingPointFieldWithDefault(msg, 10, 0.0),
    weightLb: jspb.Message.getFloatingPointFieldWithDefault(msg, 11, 0.0),
    priceUsd: jspb.Message.getFloatingPointFieldWithDefault(msg, 12, 0.0),
    releaseYear: jspb.Message.getFieldWithDefault(msg, 13, 0),
    updatedAt: (f = msg.getUpdatedAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.Laptop}
 */
proto.Laptop.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Laptop;
  return proto.Laptop.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Laptop} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Laptop}
 */
proto.Laptop.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setBrand(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 4:
      var value = new processor_message_pb.CPU;
      reader.readMessage(value,processor_message_pb.CPU.deserializeBinaryFromReader);
      msg.setCpu(value);
      break;
    case 5:
      var value = new memory_message_pb.Memory;
      reader.readMessage(value,memory_message_pb.Memory.deserializeBinaryFromReader);
      msg.setRam(value);
      break;
    case 6:
      var value = new processor_message_pb.GPU;
      reader.readMessage(value,processor_message_pb.GPU.deserializeBinaryFromReader);
      msg.addGpus(value);
      break;
    case 7:
      var value = new storage_message_pb.Storage;
      reader.readMessage(value,storage_message_pb.Storage.deserializeBinaryFromReader);
      msg.addStorages(value);
      break;
    case 8:
      var value = new screen_message_pb.Screen;
      reader.readMessage(value,screen_message_pb.Screen.deserializeBinaryFromReader);
      msg.setScreen(value);
      break;
    case 9:
      var value = new keyboard_message_pb.Keyboard;
      reader.readMessage(value,keyboard_message_pb.Keyboard.deserializeBinaryFromReader);
      msg.setKeyboard(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setWeightKg(value);
      break;
    case 11:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setWeightLb(value);
      break;
    case 12:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setPriceUsd(value);
      break;
    case 13:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setReleaseYear(value);
      break;
    case 14:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setUpdatedAt(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.Laptop.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Laptop.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Laptop} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Laptop.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getBrand();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getCpu();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      processor_message_pb.CPU.serializeBinaryToWriter
    );
  }
  f = message.getRam();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      memory_message_pb.Memory.serializeBinaryToWriter
    );
  }
  f = message.getGpusList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      6,
      f,
      processor_message_pb.GPU.serializeBinaryToWriter
    );
  }
  f = message.getStoragesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      7,
      f,
      storage_message_pb.Storage.serializeBinaryToWriter
    );
  }
  f = message.getScreen();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      screen_message_pb.Screen.serializeBinaryToWriter
    );
  }
  f = message.getKeyboard();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      keyboard_message_pb.Keyboard.serializeBinaryToWriter
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 10));
  if (f != null) {
    writer.writeDouble(
      10,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 11));
  if (f != null) {
    writer.writeDouble(
      11,
      f
    );
  }
  f = message.getPriceUsd();
  if (f !== 0.0) {
    writer.writeDouble(
      12,
      f
    );
  }
  f = message.getReleaseYear();
  if (f !== 0) {
    writer.writeUint32(
      13,
      f
    );
  }
  f = message.getUpdatedAt();
  if (f != null) {
    writer.writeMessage(
      14,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.Laptop.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.Laptop} returns this
 */
proto.Laptop.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string brand = 2;
 * @return {string}
 */
proto.Laptop.prototype.getBrand = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.Laptop} returns this
 */
proto.Laptop.prototype.setBrand = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string name = 3;
 * @return {string}
 */
proto.Laptop.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.Laptop} returns this
 */
proto.Laptop.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional CPU cpu = 4;
 * @return {?proto.CPU}
 */
proto.Laptop.prototype.getCpu = function() {
  return /** @type{?proto.CPU} */ (
    jspb.Message.getWrapperField(this, processor_message_pb.CPU, 4));
};


/**
 * @param {?proto.CPU|undefined} value
 * @return {!proto.Laptop} returns this
*/
proto.Laptop.prototype.setCpu = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.Laptop} returns this
 */
proto.Laptop.prototype.clearCpu = function() {
  return this.setCpu(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Laptop.prototype.hasCpu = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional Memory ram = 5;
 * @return {?proto.Memory}
 */
proto.Laptop.prototype.getRam = function() {
  return /** @type{?proto.Memory} */ (
    jspb.Message.getWrapperField(this, memory_message_pb.Memory, 5));
};


/**
 * @param {?proto.Memory|undefined} value
 * @return {!proto.Laptop} returns this
*/
proto.Laptop.prototype.setRam = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.Laptop} returns this
 */
proto.Laptop.prototype.clearRam = function() {
  return this.setRam(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Laptop.prototype.hasRam = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * repeated GPU gpus = 6;
 * @return {!Array<!proto.GPU>}
 */
proto.Laptop.prototype.getGpusList = function() {
  return /** @type{!Array<!proto.GPU>} */ (
    jspb.Message.getRepeatedWrapperField(this, processor_message_pb.GPU, 6));
};


/**
 * @param {!Array<!proto.GPU>} value
 * @return {!proto.Laptop} returns this
*/
proto.Laptop.prototype.setGpusList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 6, value);
};


/**
 * @param {!proto.GPU=} opt_value
 * @param {number=} opt_index
 * @return {!proto.GPU}
 */
proto.Laptop.prototype.addGpus = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 6, opt_value, proto.GPU, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.Laptop} returns this
 */
proto.Laptop.prototype.clearGpusList = function() {
  return this.setGpusList([]);
};


/**
 * repeated Storage storages = 7;
 * @return {!Array<!proto.Storage>}
 */
proto.Laptop.prototype.getStoragesList = function() {
  return /** @type{!Array<!proto.Storage>} */ (
    jspb.Message.getRepeatedWrapperField(this, storage_message_pb.Storage, 7));
};


/**
 * @param {!Array<!proto.Storage>} value
 * @return {!proto.Laptop} returns this
*/
proto.Laptop.prototype.setStoragesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 7, value);
};


/**
 * @param {!proto.Storage=} opt_value
 * @param {number=} opt_index
 * @return {!proto.Storage}
 */
proto.Laptop.prototype.addStorages = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 7, opt_value, proto.Storage, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.Laptop} returns this
 */
proto.Laptop.prototype.clearStoragesList = function() {
  return this.setStoragesList([]);
};


/**
 * optional Screen screen = 8;
 * @return {?proto.Screen}
 */
proto.Laptop.prototype.getScreen = function() {
  return /** @type{?proto.Screen} */ (
    jspb.Message.getWrapperField(this, screen_message_pb.Screen, 8));
};


/**
 * @param {?proto.Screen|undefined} value
 * @return {!proto.Laptop} returns this
*/
proto.Laptop.prototype.setScreen = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.Laptop} returns this
 */
proto.Laptop.prototype.clearScreen = function() {
  return this.setScreen(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Laptop.prototype.hasScreen = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional Keyboard keyboard = 9;
 * @return {?proto.Keyboard}
 */
proto.Laptop.prototype.getKeyboard = function() {
  return /** @type{?proto.Keyboard} */ (
    jspb.Message.getWrapperField(this, keyboard_message_pb.Keyboard, 9));
};


/**
 * @param {?proto.Keyboard|undefined} value
 * @return {!proto.Laptop} returns this
*/
proto.Laptop.prototype.setKeyboard = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.Laptop} returns this
 */
proto.Laptop.prototype.clearKeyboard = function() {
  return this.setKeyboard(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Laptop.prototype.hasKeyboard = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional double weight_kg = 10;
 * @return {number}
 */
proto.Laptop.prototype.getWeightKg = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 10, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.Laptop} returns this
 */
proto.Laptop.prototype.setWeightKg = function(value) {
  return jspb.Message.setOneofField(this, 10, proto.Laptop.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.Laptop} returns this
 */
proto.Laptop.prototype.clearWeightKg = function() {
  return jspb.Message.setOneofField(this, 10, proto.Laptop.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Laptop.prototype.hasWeightKg = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional double weight_lb = 11;
 * @return {number}
 */
proto.Laptop.prototype.getWeightLb = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 11, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.Laptop} returns this
 */
proto.Laptop.prototype.setWeightLb = function(value) {
  return jspb.Message.setOneofField(this, 11, proto.Laptop.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.Laptop} returns this
 */
proto.Laptop.prototype.clearWeightLb = function() {
  return jspb.Message.setOneofField(this, 11, proto.Laptop.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Laptop.prototype.hasWeightLb = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional double price_usd = 12;
 * @return {number}
 */
proto.Laptop.prototype.getPriceUsd = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 12, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.Laptop} returns this
 */
proto.Laptop.prototype.setPriceUsd = function(value) {
  return jspb.Message.setProto3FloatField(this, 12, value);
};


/**
 * optional uint32 release_year = 13;
 * @return {number}
 */
proto.Laptop.prototype.getReleaseYear = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 13, 0));
};


/**
 * @param {number} value
 * @return {!proto.Laptop} returns this
 */
proto.Laptop.prototype.setReleaseYear = function(value) {
  return jspb.Message.setProto3IntField(this, 13, value);
};


/**
 * optional google.protobuf.Timestamp updated_at = 14;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.Laptop.prototype.getUpdatedAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 14));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.Laptop} returns this
*/
proto.Laptop.prototype.setUpdatedAt = function(value) {
  return jspb.Message.setWrapperField(this, 14, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.Laptop} returns this
 */
proto.Laptop.prototype.clearUpdatedAt = function() {
  return this.setUpdatedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Laptop.prototype.hasUpdatedAt = function() {
  return jspb.Message.getField(this, 14) != null;
};


goog.object.extend(exports, proto);
