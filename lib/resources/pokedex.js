'use strict';

var util         = require('util');
var ResourceBase = require('./resourceBase');

var Pokedex = function (config) {
  ResourceBase.call(this, 'pokedex', config);
};

util.inherits(Pokedex, ResourceBase);

(function () {

  this.retrieve = function (callback) {
    return this._transmit(1, callback);
  };

}).call(Pokedex.prototype);

module.exports = Pokedex;
