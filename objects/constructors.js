function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log('draw');
  };
  console.log('this', this);
}

const circle = new Circle(1);
circle.draw();
