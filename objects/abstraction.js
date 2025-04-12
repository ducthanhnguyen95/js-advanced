function Circle(radius) {
  this.radius = radius;
  this.defaultLocation = { x: 0, y: 0 };
  this.computeOptimumLocation = function (factor) {
    console.log('Computer optimum location');
  };
  this.draw = function () {
    this.computeOptimumLocation();
    console.log('draw');
  };
}

const circle = new Circle(10);
circle.computeOptimumLocation(0.1);
circle.draw();
