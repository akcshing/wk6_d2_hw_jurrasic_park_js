const Park = function(name, price, collection = []) {
  this.name = name;
  this.price = price;
  this.collection = collection
}

Park.prototype.addDino = function (dinosaur) {
  this.collection.push(dinosaur)
};

module.exports = Park;
