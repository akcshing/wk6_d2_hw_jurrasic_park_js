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

module.exports = Park;
