const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  let dinosaur;
  let dinosaur2;
  let dinosaur3;
  let park;

  beforeEach(function () {
    dinosaur = new Dinosaur('t-rex', 'carnivore', 50);
    dinosaur2 = new Dinosaur("Velociraptor", "carnivore", 35);
    dinosaur3 = new Dinosaur("Velociraptor", "carnivore", 40);

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
    assert.deepEqual(park.collection, [dinosaur, dinosaur2]);
  });

  it('should be able to remove a dinosaur from its collection', function(){
    park.addDino(dinosaur2);
    park.removeDino(dinosaur);
    assert.deepEqual(park.collection, [dinosaur2]);
  });

  xit('should be able to find the dinosaur that attracts the most visitors', function(){
    assert.deepEqual(park.bestDino(), "t-rex")
  });

  it('should be able to find all dinosaurs of a particular species', function(){
    park.addDino(dinosaur2);
    park.addDino(dinosaur3);
    assert.deepEqual(park.findSpecies("Velociraptor"), [dinosaur2, dinosaur3])
  });

  it('should be able to remove all dinosaurs of a particular species', function(){
    park.addDino(dinosaur2);
    park.addDino(dinosaur3);
    park.removeSpecies("Velociraptor");
    assert.deepEqual(park.collection, [dinosaur])
  });

  it("should be able to calculate the total number of visitors each day", function(){
    park.addDino(dinosaur2);
    assert.strictEqual(park.calcDayVistors(), 85);
  });

  it("should be able to calculate the total number of visitors per year", function(){
    park.addDino(dinosaur3);
    assert.strictEqual(park.calcYearVisitors(), 90*365)
  });

  it("should be able to calculate the total revenue from ticket sales for one year", function(){
    park.addDino(dinosaur2);
    assert.strictEqual(park.calcRevenue(), 85*365*5)

  });
});
