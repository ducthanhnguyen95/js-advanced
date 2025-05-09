function Circle(radius) {
  // Instance members
  this.radius = radius;

  this.move = function () {
    console.log('move');
  };
}
const c1 = new Circle(1);

Circle.prototype.draw = function () {
  console.log('draw');
};

console.log(c1.draw());

// Return instance members
console.log(Object.keys(c1));

// Return all members (instance + prototype)
for (let key in c1) console.log(key);

console.log(c1.hasOwnProperty('radius'));
console.log(c1.hasOwnProperty('draw'));
