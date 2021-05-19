function StopWatch() {
    let startTime;
    let isRunning = false;
    let duration = 0;

    this.start = () => {
        if (isRunning) {
            throw new Error('Stopwatch has already started.');
        }
        startTime = new Date();
        isRunning = true;
    }

    this.stop = () => {
        if (!isRunning) {
            throw new Error('Stopwatch is not started.');
        }
        let stopTime = new Date();
        duration += (stopTime.getTime() - startTime.getTime()) / 1000;
        isRunning = false;
    }

    this.reset = () => {
        duration = 0;
    }

    Object.defineProperty(this, 'duration', {
        get: () => duration
    });
}