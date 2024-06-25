class Stopwatch {
  #elapsedTimeSeconds = 0;
  #intervalID = null;

  start(callback = () => {}) {
    this.#intervalID = setInterval(() => {
      this.#elapsedTimeSeconds++;
      callback();
    }, 1000);
  }
  stop(callback = () => {}) {
    clearInterval(this.#intervalID);
    callback();
  }
  reset(callback = () => {}) {
    this.#elapsedTimeSeconds = 0;
    callback();
  }
  get elapsedTime() {
    return Stopwatch.formatTime(this.#elapsedTimeSeconds);
  }

  static formatTime(timeInSeconds) {
    const hours = Math.floor(timeInSeconds / 3600);
    const minutes = Math.floor((timeInSeconds % 3600) / 60);
    const seconds = timeInSeconds - hours * 3600 - minutes * 60;
    return `${Stopwatch.zeroPadding(hours)}:${Stopwatch.zeroPadding(
      minutes
    )}:${Stopwatch.zeroPadding(seconds)}`;
  }
  static zeroPadding(originalNumber, desiredAmountDigits = 2) {
    let stringNumber = String(originalNumber);
    const zeroesRequired = desiredAmountDigits - stringNumber.length;
    if (zeroesRequired <= 0) {
      return stringNumber;
    }
    for (let counter = 0; counter < zeroesRequired; counter++) {
      stringNumber = `0${stringNumber}`;
    }
    return stringNumber;
  }
}

const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");
const resetButton = document.getElementById("reset");
const stopwatchDisplay = document.getElementById("stopwatchDisplay");

function updateDisplay() {
  stopwatchDisplay.innerText = sw1.elapsedTime;
}

const sw1 = new Stopwatch();

startButton.addEventListener("click", () => {
  sw1.start(updateDisplay);
});
stopButton.addEventListener("click", () => {
  sw1.stop();
});
resetButton.addEventListener("click", () => {
  sw1.reset(updateDisplay);
});
