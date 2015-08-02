'use strict';

var util         = require('util');
var ResourceBase = require('./resourceBase');

var Game = function (config) {
  ResourceBase.call(this, 'game', config);
};

util.inherits(Game, ResourceBase);

(function () {

  this.retrieve = function (id, callback) {
    return this._transmit(id, callback);
  };

}).call(Game.prototype);

module.exports = Game;
