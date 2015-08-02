'use strict';

var util         = require('util');
var ResourceBase = require('./resourceBase');

var Sprite = function (config) {
  ResourceBase.call(this, 'sprite', config);
};

util.inherits(Sprite, ResourceBase);

(function () {

  this.retrieve = function (id, callback) {
    return this._transmit(id, callback);
  };

}).call(Sprite.prototype);

module.exports = Sprite;
