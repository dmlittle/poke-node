'use strict';

var chai   = require('chai');
var expect = chai.expect;

var PokeAPI = require('../lib/index.js')();

describe('Type', function () {

  describe('retrieve', function () {

    it('should fetch type', function (done) {
      var type = {
        id: 1,
        ineffective: 2,
        name: 'Normal',
        no_effect: 1,
        resistance: 0,
        resource_uri: '/api/v1/type/1/',
        super_effective: 0,
        weakness: 1
      };

      PokeAPI.type.retrieve(type.id, function (err,res) {
        expect(res.name).to.eql(type.name);
        expect(res.id).to.eql(type.id);
        expect(res.ineffective.length).to.eql(type.ineffective);
        expect(res.no_effect.length).to.eql(type.no_effect);
        expect(res.resistance.length).to.eql(type.resistance);
        expect(res.super_effective.length).to.eql(type.super_effective);
        expect(res.weakness.length).to.eql(type.weakness);
        expect(res.resource_uri).to.eql(type.resource_uri);
        done();
      });
    });

  });

});
