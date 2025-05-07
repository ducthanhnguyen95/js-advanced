Object.getPrototypeOf(myObject);
// myObject.__proto__ (parent of myObject)
// Constructor.prototype

function Circle(radius) {
  this.radius = radius;
}

Circle.prototype;

const circle = new Circle(1);
