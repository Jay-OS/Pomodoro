import { minutesToMilliseconds } from '../../utils/time';

export interface ITimerState {
    ellapsedMS: number;
    totalTimeMS: number;
    endTimeMS: number;
    isPaused: boolean;
    hasEnded: boolean;
};

interface ITimer {
    togglePause: () => ITimerState;
    update: () => ITimerState;
    getCurrentState: () => ITimerState;
};

export class Timer implements ITimer {
    private lastUpdate = 0;
    private ellapsedMS = 0;
    private totalTimeMS = 0;
    private endTimeMS = 0;
    private isPaused = true;

    constructor(durationMins: number) {
        const currentTimeMS = new Date().getTime();
        const durationMS = minutesToMilliseconds(durationMins);

        this.lastUpdate = currentTimeMS;
        this.totalTimeMS = durationMS;
        this.endTimeMS = currentTimeMS + durationMS;
    }

    private advanceToPresent() {
        const currentTimeMS = new Date().getTime();
        const timeRemainingMS = this.endTimeMS >= currentTimeMS
            ? this.endTimeMS - currentTimeMS
            : 0;

        this.lastUpdate = currentTimeMS;
        this.ellapsedMS = this.totalTimeMS - timeRemainingMS;
    }

    private maintainPause() {
        const currentTimeMS = new Date().getTime();
        const ellapsedTimeSinceUpdateMS = currentTimeMS - this.lastUpdate;

        this.endTimeMS += ellapsedTimeSinceUpdateMS;
        this.lastUpdate = currentTimeMS;
    }

    update() {
        if (this.isPaused) {
            this.maintainPause();
            return this.getCurrentState();;
        }

        this.advanceToPresent();
        return this.getCurrentState();
    }

    togglePause() {
        this.isPaused = !this.isPaused;
        return this.update();
    }

    getCurrentState() {
        const timerState: ITimerState = {
            ellapsedMS: this.ellapsedMS,
            totalTimeMS: this.totalTimeMS,
            endTimeMS: this.endTimeMS,
            isPaused: this.isPaused,
            hasEnded: this.ellapsedMS >= this.totalTimeMS,
        };
        return timerState;
    }
}

const exports: { instance: ITimer | null } = {
    instance: null
};

export default exports;
