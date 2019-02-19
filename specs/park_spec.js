const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  beforeEach(function () {
    dinosaur = new Dinosaur('t-rex', 'carnivore', 50);
    dinosaur2 = new Dinosaur("Velociraptor", "carnivore", 35);

    park = new Park("Jurrasic Park", 5, [dinosaur]);
  })

  it('should have a name', function(){
    assert.equal(park.name, "Jurrasic Park");
  });

  it('should have a ticket price', function(){
    assert.strictEqual(park.price, 5);
  });

  it('should have a collection of dinosaurs', function(){
    assert.deepEqual(park.collection, [dinosaur])
  });

  it('should be able to add a dinosaur to its collection', function () {
    park.addDino(dinosaur2);
    assert.deepEqual(park.collection, [dinosaur, dinosaur2])
  });

  it('should be able to remove a dinosaur from its collection');

  it('should be able to find the dinosaur that attracts the most visitors');

  it('should be able to find all dinosaurs of a particular species');

  it('should be able to remove all dinosaurs of a particular species');

});
