'use strict';

var chai   = require('chai');
var expect = chai.expect;

var PokeAPI = require('../lib/index.js')();

describe('Pokemon', function () {

  describe('retrieve', function () {

    var resource_uri = '/api/v1/pokemon/';

    it('should fetch bulbasaur', function (done) {
      var name    = 'Bulbasaur';
      var pkdx_id = 1;

      PokeAPI.pokemon.retrieve(pkdx_id, function (err,res) {
        expect(res.name).to.eql(name);
        expect(res.pkdx_id).to.eql(pkdx_id);
        expect(res.resource_uri).to.eql(resource_uri + pkdx_id + '/');
        done();
      });
    });

    it('should fetch pikachu', function (done) {
      var name    = 'Pikachu';
      var pkdx_id = 25;

      PokeAPI.pokemon.retrieve(pkdx_id, function (err,res) {
        expect(res.name).to.eql(name);
        expect(res.pkdx_id).to.eql(pkdx_id);
        expect(res.resource_uri).to.eql(resource_uri + pkdx_id + '/');
        done();
      });
    });

    it('should fetch a pokemon', function (done) {
      PokeAPI.pokemon.retrieve(undefined, function (err,res) {
        expect(res.meta.next).to.eql('/api/v1/pokemon/?limit=1&offset=1');
        done();
      });
    });

  });

});
