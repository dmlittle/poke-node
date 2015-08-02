'use strict';

var util         = require('util');
var ResourceBase = require('./resourceBase');

var Type = function (config) {
  ResourceBase.call(this, 'type', config);
};

util.inherits(Type, ResourceBase);

(function () {

  this.retrieve = function (id, callback) {
    return this._transmit(id, callback);
  };

}).call(Type.prototype);

module.exports = Type;
