'use strict';

var util         = require('util');
var ResourceBase = require('./resourceBase');

var Ability = function (config) {
  ResourceBase.call(this, 'ability', config);
};

util.inherits(Ability, ResourceBase);

(function () {

  this.retrieve = function (id, callback) {
    return this._transmit(id, callback);
  };

}).call(Ability.prototype);

module.exports = Ability;
