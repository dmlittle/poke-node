'use strict';

var util         = require('util');
var ResourceBase = require('./resourceBase');

var Description = function (config) {
  ResourceBase.call(this, 'description', config);
};

util.inherits(Description, ResourceBase);

(function () {

  this.retrieve = function (id, callback) {
    return this._transmit(id, callback);
  };

}).call(Description.prototype);

module.exports = Description;
