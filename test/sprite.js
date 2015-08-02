'use strict';

var chai   = require('chai');
var expect = chai.expect;

var PokeAPI = require('../lib/index.js')();

describe('Sprite', function () {

  describe('retrieve', function () {

    it('should fetch sprite', function (done) {
      var sprite = {
        id: 1,
        image: '/media/img/1383571573.78.png',
        name: 'Bulbasaur_red_blue',
        pokemon: {
          name: 'bulbasaur',
          resource_uri: '/api/v1/pokemon/1/'
        },
        resource_uri: '/api/v1/sprite/1/'
      };

      PokeAPI.sprite.retrieve(sprite.id, function (err,res) {
        expect(res.id).to.eql(sprite.id);
        expect(res.image).to.eql(sprite.image);
        expect(res.name).to.eql(sprite.name);
        expect(res.pokemon.name).to.eql(sprite.pokemon.name);
        expect(res.pokemon.resource_uri).to.eql(sprite.pokemon.resource_uri);
        expect(res.resource_uri).to.eql(sprite.resource_uri);
        done();
      });
    });

  });

});
