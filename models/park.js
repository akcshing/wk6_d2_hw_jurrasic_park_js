const Park = function(name, price, collection = []) {
  this.name = name;
  this.price = price;
  this.collection = collection
}

Park.prototype.addDino = function (dino) {
  this.collection.push(dino);
};

Park.prototype.removeDino = function (dino) {
  this.collection.splice(this.collection.indexOf(dino), 1);
};

Park.prototype.bestDino = function () {

};


Park.prototype.findSpecies = function (species) {
  let foundDinos = []
  for (let dinosaur of this.collection) {
    if (dinosaur.species === species) {
      foundDinos.push(dinosaur);
    }
  }
  return foundDinos;
};

module.exports = Park;


// let dinoPopularity = []
// for (let dinosaur of this.collection){
//   dinoPopularity.push(dinosaur.guestsAttractedPerDay);
// }
// return Math.max.apply(null, dinoPopularity)
