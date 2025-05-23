// function StopWatch() {
//   this.duration = 0;
//   this.isEnable = false;
//   this.start = function () {
//     if (this.isEnable) {
//       throw new Error('Stopwatch has already started.');
//     }
//     this.isEnable = true;
//     this.duration = setInterval(() => this.duration++);
//   };

//   this.stop = function () {
//     if (!this.isEnable) {
//       throw new Error('Stopwatch is not started.');
//     }
//     this.isEnable = false;
//     this.duration = 0;
//   };
// }

// const sw = new StopWatch();
// console.log(sw.duration);
// console.log(sw.start());
// console.log(sw.start());
// console.log(sw.duration)
// ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––

function StopWatch() {
  let startTime,
    endTime,
    running,
    duration = 0;
  this.start = function () {
    if (running) throw new Error('Stopwatch has already started.');
    running = true;
    startTime = new Date();
  };
  this.stop = function () {
    if (!running) throw new Error('Stopwatch is not started.');
    running = false;
    endTime = new Date();

    const seconds = (endTime.getTime() - startTime.getTime()) / 1000;
    duration += seconds;
  };

  this.reset = function () {
    startTime = null;
    endTime = null;
    running = false;
    duration = 0;
  };

  Object.defineProperty(this, 'duration', {
    get: function () {
      return duration;
    },
  });
}
