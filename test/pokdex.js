'use strict';

var chai   = require('chai');
var expect = chai.expect;

var PokeAPI = require('../lib/index.js')();

describe('Pokdex', function () {

  describe('retrieve', function () {

    it('should fetch pokdex', function (done) {
      var pokedex = {
        name: 'national',
        length: 778
      };

      PokeAPI.pokedex.retrieve(function (err,res) {
        expect(res.name).to.eql(pokedex.name);
        expect(res.pokemon.length).to.eql(pokedex.length);
        done();
      });
    });

  });

});
