'use strict';

var chai   = require('chai');
var expect = chai.expect;

var PokeAPI = require('../lib/index.js')();

describe('Egg', function () {

  describe('retrieve', function () {

    it('should fetch egg', function (done) {
      var egg = {
        id: 3,
        name: 'Bug',
        pokemon: 68,
        resource_uri: '/api/v1/egg/3/'
      };

      PokeAPI.egg.retrieve(egg.id, function (err,res) {
        expect(res.name).to.eql(egg.name);
        expect(res.id).to.eql(egg.id);
        expect(res.pokemon.length).to.eql(egg.pokemon);
        expect(res.resource_uri).to.eql(egg.resource_uri);
        done();
      });
    });

  });

});
