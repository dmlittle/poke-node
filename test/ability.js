'use strict';

var chai   = require('chai');
var expect = chai.expect;

var PokeAPI = require('../lib/index.js')();

describe('Ability', function () {

  describe('retrieve', function () {

    it('should fetch ability', function (done) {
      var ability = {
        description: '',
        id: 1,
        name: 'Stench',
        resource_uri: '/api/v1/ability/1/'
      };

      PokeAPI.ability.retrieve(ability.id, function (err,res) {
        expect(res.description).to.eql(ability.description);
        expect(res.id).to.eql(ability.id);
        expect(res.name).to.eql(ability.name);
        expect(res.resource_uri).to.eql(ability.resource_uri);
        done();
      });
    });

  });

});
