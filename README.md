# poke-node
[![Build Status](https://travis-ci.org/dmlittle/poke-node.svg?branch=master)](https://travis-ci.org/dmlittle/poke-node)

Node.js wrapper for PokeAPI

### Installation

poke-node can be installed through the npm:

```
$ npm install poke-node
```

To build and install from the latest source:

```
$ git clone git@github.com:dmlittle/poke-node.git
$ npm install
```

### Usage
```javascript
var PokeAPI = require('poke-node')();

PokeAPI.pokemon.retrieve(1, function (err, res) {
  console.log(res) // Log Bulbasaur's Info
});
```

Additionally, every resource method returns a promise, so you don't have to use the regular callback. E.g.

```javascript
var PokeAPI = require('poke-node')();

PokeAPI.pokemon.retrieve(1)
.then(function (res) {
  console.log(res);
})
.catch(function (e) {
  console.log(e);
});
```

