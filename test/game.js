'use strict';

var chai   = require('chai');
var expect = chai.expect;

var PokeAPI = require('../lib/index.js')();

describe('Game', function () {

  describe('retrieve', function () {

    it('should fetch game', function (done) {
      var game = {
        generation: 1,
        id: 1,
        name: 'Red(jpn)',
        release_year: 1996,
        resource_uri: '/api/v1/game/1/'
      };

      PokeAPI.game.retrieve(game.id, function (err,res) {
        expect(res.generation).to.eql(game.generation);
        expect(res.id).to.eql(game.id);
        expect(res.name).to.eql(game.name);
        expect(res.release_year).to.eql(game.release_year);
        expect(res.resource_uri).to.eql(game.resource_uri);
        done();
      });
    });

  });

});
