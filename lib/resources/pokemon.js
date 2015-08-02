'use strict';

var util         = require('util');
var ResourceBase = require('./resourceBase');

var Pokemon = function (config) {
  ResourceBase.call(this, 'pokemon', config);
};

util.inherits(Pokemon, ResourceBase);

(function () {

  this.retrieve = function (id, callback) {
    return this._transmit(id, callback);
  };

}).call(Pokemon.prototype);

module.exports = Pokemon;
