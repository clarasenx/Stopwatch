class Stopwatch {
  elapsedTimeSeconds = 0;
  intervalID = null;
  start() {
    this.intervalID = setInterval(() => {
      this.elapsedTimeSeconds++;
      console.log(this.elapsedTime);
    }, 1000);
  }
  stop() {
    clearInterval(this.intervalID);
  }
  reset() {
    this.elapsedTimeSeconds = 0;
  }
  get elapsedTime() {
    return Stopwatch.formatTime(this.elapsedTimeSeconds);
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

const sw1 = new Stopwatch();
