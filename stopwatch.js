class Stopwatch {
  elapsedTimeSeconds = 0;
  intervalID = null;
  start() {
    intervalID = setInterval(() => {
      this.elapsedTimeSeconds++;
    }, 1000);
  }
  stop() {
    clearInterval(this.intervalID);
  }
  reset() {
    this.elapsedTimeSeconds = 0;
  }
}

const sw1 = new Stopwatch();
