export default class Timer {

    private hours = 0;
    private minutes = 0;
    private seconds = 0;

    public increaseSecond(): Timer {
        this.seconds++;

        if (this.seconds === 60) {
            this.seconds = 0;
            this.minutes++;
        }

        if (this.minutes === 60) {
            this.minutes = 0;
            this.hours++;
        }

        return this;
    }

    public toString(): string {
        const hours = this.formatTime(this.hours);
        const minutes = this.formatTime(this.minutes);
        const seconds = this.formatTime(this.seconds);

        return `${hours}:${minutes}:${seconds}`;
    }

    private formatTime(metric: number): string {
        if (metric < 10) {
            return "0" + metric;
        }
        return metric.toString();
    }

}