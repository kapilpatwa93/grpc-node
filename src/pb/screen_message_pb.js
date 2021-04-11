// source: screen_message.proto
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

goog.exportSymbol('proto.Screen', null, global);
goog.exportSymbol('proto.Screen.Panel', null, global);
goog.exportSymbol('proto.Screen.Resolution', null, global);
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
proto.Screen = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Screen, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.Screen.displayName = 'proto.Screen';
}
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
proto.Screen.Resolution = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Screen.Resolution, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.Screen.Resolution.displayName = 'proto.Screen.Resolution';
}



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
proto.Screen.prototype.toObject = function(opt_includeInstance) {
  return proto.Screen.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Screen} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Screen.toObject = function(includeInstance, msg) {
  var f, obj = {
    size: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0.0),
    resolution: (f = msg.getResolution()) && proto.Screen.Resolution.toObject(includeInstance, f),
    panel: jspb.Message.getFieldWithDefault(msg, 3, 0),
    multitouch: jspb.Message.getBooleanFieldWithDefault(msg, 4, false)
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
 * @return {!proto.Screen}
 */
proto.Screen.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Screen;
  return proto.Screen.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Screen} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Screen}
 */
proto.Screen.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setSize(value);
      break;
    case 2:
      var value = new proto.Screen.Resolution;
      reader.readMessage(value,proto.Screen.Resolution.deserializeBinaryFromReader);
      msg.setResolution(value);
      break;
    case 3:
      var value = /** @type {!proto.Screen.Panel} */ (reader.readEnum());
      msg.setPanel(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setMultitouch(value);
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
proto.Screen.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Screen.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Screen} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Screen.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSize();
  if (f !== 0.0) {
    writer.writeFloat(
      1,
      f
    );
  }
  f = message.getResolution();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.Screen.Resolution.serializeBinaryToWriter
    );
  }
  f = message.getPanel();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
  f = message.getMultitouch();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.Screen.Panel = {
  UNKNOWN: 0,
  IPS: 1,
  OLED: 2
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
proto.Screen.Resolution.prototype.toObject = function(opt_includeInstance) {
  return proto.Screen.Resolution.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Screen.Resolution} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Screen.Resolution.toObject = function(includeInstance, msg) {
  var f, obj = {
    width: jspb.Message.getFieldWithDefault(msg, 1, 0),
    height: jspb.Message.getFieldWithDefault(msg, 2, 0)
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
 * @return {!proto.Screen.Resolution}
 */
proto.Screen.Resolution.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Screen.Resolution;
  return proto.Screen.Resolution.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Screen.Resolution} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Screen.Resolution}
 */
proto.Screen.Resolution.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setWidth(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setHeight(value);
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
proto.Screen.Resolution.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Screen.Resolution.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Screen.Resolution} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Screen.Resolution.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getWidth();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getHeight();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
};


/**
 * optional uint32 width = 1;
 * @return {number}
 */
proto.Screen.Resolution.prototype.getWidth = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.Screen.Resolution} returns this
 */
proto.Screen.Resolution.prototype.setWidth = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint32 height = 2;
 * @return {number}
 */
proto.Screen.Resolution.prototype.getHeight = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.Screen.Resolution} returns this
 */
proto.Screen.Resolution.prototype.setHeight = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional float size = 1;
 * @return {number}
 */
proto.Screen.prototype.getSize = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.Screen} returns this
 */
proto.Screen.prototype.setSize = function(value) {
  return jspb.Message.setProto3FloatField(this, 1, value);
};


/**
 * optional Resolution resolution = 2;
 * @return {?proto.Screen.Resolution}
 */
proto.Screen.prototype.getResolution = function() {
  return /** @type{?proto.Screen.Resolution} */ (
    jspb.Message.getWrapperField(this, proto.Screen.Resolution, 2));
};


/**
 * @param {?proto.Screen.Resolution|undefined} value
 * @return {!proto.Screen} returns this
*/
proto.Screen.prototype.setResolution = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.Screen} returns this
 */
proto.Screen.prototype.clearResolution = function() {
  return this.setResolution(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Screen.prototype.hasResolution = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional Panel panel = 3;
 * @return {!proto.Screen.Panel}
 */
proto.Screen.prototype.getPanel = function() {
  return /** @type {!proto.Screen.Panel} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.Screen.Panel} value
 * @return {!proto.Screen} returns this
 */
proto.Screen.prototype.setPanel = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * optional bool multitouch = 4;
 * @return {boolean}
 */
proto.Screen.prototype.getMultitouch = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.Screen} returns this
 */
proto.Screen.prototype.setMultitouch = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};


goog.object.extend(exports, proto);