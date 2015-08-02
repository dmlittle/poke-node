'use strict';

var chai   = require('chai');
var expect = chai.expect;

var PokeAPI = require('../lib/index.js')();

describe('Move', function () {

  describe('retrieve', function () {

    it('should fetch move', function (done) {
      var move = {
        accuracy: 100,
        category: '',
        description: 'Inflicts regular damage.  User\'s critical hit rate is one level higher when using this move.',
        id: 2,
        name: 'Karate-chop',
        power: 50,
        pp: 25,
        resource_uri: '/api/v1/move/2/'
      };

      PokeAPI.move.retrieve(move.id, function (err,res) {
        expect(res.accuracy).to.eql(move.accuracy);
        expect(res.category).to.eql(move.category);
        expect(res.description).to.eql(move.description);
        expect(res.id).to.eql(move.id);
        expect(res.name).to.eql(move.name);
        expect(res.power).to.eql(move.power);
        expect(res.pp).to.eql(move.pp);
        expect(res.resource_uri).to.eql(move.resource_uri);
        done();
      });
    });

  });

});
