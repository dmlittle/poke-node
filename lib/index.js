'use strict';

var resources = require('./resources');

var POKE_API_HOST = 'http://pokeapi.co/api/v1/';

var PokeAPI = function () {

  if (!(this instanceof PokeAPI)) {
    return new PokeAPI();
  }

  this.options = {
    host: POKE_API_HOST
  };

  this._initResources();
};

(function () {

  this._initResources = function () {
    var services = Object.keys(resources);

    for (var i = 0; i < services.length; i++) {
      var service = services[i];
      this[service] = new resources[service](this);
    }
  };

}).call(PokeAPI.prototype);

module.exports = PokeAPI;
