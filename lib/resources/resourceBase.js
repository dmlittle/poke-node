'use strict';

var request   = require('request');
var Bluebird = require('bluebird');

var ResourceBase = function (endpoint, config) {
  this.uri    = config.options.host + endpoint;
};

(function () {

  this._transmit = function (uri, callback) {

    var opts = {
      url: this.uri + (uri ? '/' + uri : ''),
      method: 'GET',
      json: true
    };

    return new Bluebird(function (resolve, reject) {
      request(opts, function (err, resp, body) {

        /* istanbul ignore if */
        if (err) {
          return reject(err);
        }

        /* istanbul ignore if */
        if (body && body.error) {
          return reject(body.error);
        }

        return resolve(body);
      });
    }).nodeify(callback);
  };

}).call(ResourceBase.prototype);

module.exports = ResourceBase;
