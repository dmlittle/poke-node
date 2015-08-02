'use strict';

var util         = require('util');
var ResourceBase = require('./resourceBase');

var Move = function (config) {
  ResourceBase.call(this, 'move', config);
};

util.inherits(Move, ResourceBase);

(function () {

  this.retrieve = function (id, callback) {
    return this._transmit(id, callback);
  };

}).call(Move.prototype);

module.exports = Move;
