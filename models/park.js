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

Park.prototype.removeSpecies = function (species) {
  let remainingDinos = []
  for (let dinosaur of this.collection){
    if (dinosaur.species !== species) {
      remainingDinos.push(dinosaur);
    }
  }
  this.collection = remainingDinos

Park.prototype.calcDayVistors = function () {
  let totalVisitors = 0
  for (let dinosaur of this.collection){
    totalVisitors += dinosaur.guestsAttractedPerDay
  }
  return totalVisitors;
};

Park.prototype.calcYearVisitors = function () {
  let yearlyVisitors = this.calcDayVistors() * 365;
  return yearlyVisitors;
};


  // const resultCollection = this.collection.filter(dinosaur => dinosaur.species === species);
  // this.collection = resultCollection;




  // for (let i = this.collection.length-1; i=0; i--) {
  //   let currentDino = this.collection[i];
  //   if (currentDino.species === species) {
  //     this.collection.splice(i, 1);
  //   }
  // }
};

module.exports = Park;


// let dinoPopularity = []
// for (let dinosaur of this.collection){
//   dinoPopularity.push(dinosaur.guestsAttractedPerDay);
// }
// return Math.max.apply(null, dinoPopularity)
