function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log('draw');
  };
}

console.log(Circle.name);
console.log(Circle.length);
console.log(Circle.constructor);

const Circle1 = new Function(
  'radius',
  `
  this.radius = radius;
  this.draw = function () {
    console.log('draw');
  }
`
);

const circle = new Circle1(1);
console.log(circle);
