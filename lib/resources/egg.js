'use strict';

var util         = require('util');
var ResourceBase = require('./resourceBase');

var Egg = function (config) {
  ResourceBase.call(this, 'egg', config);
};

util.inherits(Egg, ResourceBase);

(function () {

  this.retrieve = function (id, callback) {
    return this._transmit(id, callback);
  };

}).call(Egg.prototype);

module.exports = Egg;
