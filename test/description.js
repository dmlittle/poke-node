'use strict';

var chai   = require('chai');
var expect = chai.expect;

var PokeAPI = require('../lib/index.js')();

describe('Description', function () {

  describe('retrieve', function () {

    it('should fetch description', function (done) {
      var description = {
        description: 'The seed on its back is filled with nutrients. The seed grows steadily larger as its body grows.',
        id: 4,
        name: 'Bulbasaur_gen_1',
        resource_uri: '/api/v1/description/4/'
      };

      PokeAPI.description.retrieve(description.id, function (err,res) {
        expect(res.description).to.eql(description.description);
        expect(res.id).to.eql(description.id);
        expect(res.name).to.eql(description.name);
        expect(res.resource_uri).to.eql(description.resource_uri);
        done();
      });
    });

  });

});
