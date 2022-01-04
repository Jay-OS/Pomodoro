import { minutesToMilliseconds } from '../../utils/time';
import config from '../../constants/config';

export interface ICurrentTimerState {
    ellapsedMS: number | undefined;
    totalTimeMS: number | undefined;
    endTimeMS: number;
    isPaused: boolean;
    hasStarted: boolean;
    hasEnded: boolean;
}

interface ITimer {
    start: () => void;
    togglePause: () => ICurrentTimerState;
    update: () => ICurrentTimerState;
    getCurrentState: () => ICurrentTimerState;
}

export class Timer implements ITimer {
    private lastUpdate: number = 0;
    private ellapsedMS: number = 0;
    private totalTimeMS: number = 0;
    private endTimeMS: number = 0;
    private isPaused: boolean = false;
    private hasStarted: boolean = false;

    constructor(durationMins: number) {
        const currentTimeMS = new Date().getTime();
        const durationMS = minutesToMilliseconds(durationMins);

        this.lastUpdate = currentTimeMS;
        this.totalTimeMS = durationMS;
        this.endTimeMS = currentTimeMS + durationMS;
    }

    private advanceToPresent() {
        const currentTimeMS = new Date().getTime();
        this.lastUpdate = currentTimeMS;
        this.ellapsedMS =
            this.ellapsedMS + config.timerRefreshIntervalMS < this.totalTimeMS
                ? this.ellapsedMS + config.timerRefreshIntervalMS
                : this.totalTimeMS;
    }

    private maintainPause() {
        this.endTimeMS += config.timerRefreshIntervalMS;
        this.lastUpdate = new Date().getTime();
    }

    start() {
        if (!this.hasStarted) {
            const currentTimeMS = new Date().getTime();
            this.endTimeMS = currentTimeMS + this.totalTimeMS;
            this.hasStarted = true;
        }
    }

    update() {
        if (this.isPaused) {
            this.maintainPause();
            return this.getCurrentState();
        }

        this.advanceToPresent();
        return this.getCurrentState();
    }

    togglePause() {
        this.isPaused = !this.isPaused;
        return this.update();
    }

    getCurrentState() {
        const timerState: ICurrentTimerState = {
            ellapsedMS: this.ellapsedMS,
            totalTimeMS: this.totalTimeMS,
            endTimeMS: this.endTimeMS,
            isPaused: this.isPaused,
            hasStarted: this.hasStarted,
            hasEnded: this.ellapsedMS >= this.totalTimeMS,
        };
        return timerState;
    }
}

const exports: { instance: ITimer | null } = {
    instance: null,
};

export default exports;
