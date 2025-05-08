// function Circle(radius) {
//   this.radius = radius;

//   this.draw = function () {
//     console.log('draw');
//   };
// }

// const c1 = new Circle(1);
// const c2 = new Circle(2);
// console.log(c1)
// console.log(c2)
// console.log(Circle.prototype === c1.__proto__)
//__________________________________________________________________

function Circle(radius) {
  // Instance members
  this.radius = radius;

  this.move = function () {
    this.draw();
    console.log('move');
  };
}

// Prototype members
// Circle.prototype.draw = function () {
//   this.move();
//   console.log('draw');
// };
Circle.prototype.draw = function () {
  console.log('draw');
};

const c1 = new Circle(1);
const c2 = new Circle(2);
console.log(c1);
console.log(c1.draw());
console.log(c2);
console.log(c2.draw());

console.log('_______________________________________________');
console.log(c1.toString());

Circle.prototype.toString = function () {
  return 'Circle with radius ' + this.radius;
};

console.log(c1.toString());
console.log(c1.move());
