import { Timer, ICurrentTimerState } from './timer';

describe('Timer entity . . .', () => {
    const systemTime = new Date(2020, 3, 1, 18, 0, 0);

    beforeAll(() => {
        jest.useFakeTimers('modern');
    });

    beforeEach(() => {
        jest.setSystemTime(systemTime);
    });

    afterAll(() => {
        jest.useRealTimers();
    });

    const checkResultingState = (
        result: ICurrentTimerState,
        timerDurationMins: number,
        pausedForMs: number | null,
        timerStartTimeMs: number | null,
        ellapsedTimeMs: number
    ) => {
        const timerDurationMs = timerDurationMins * 60 * 1000;
        const startTimeMs = timerStartTimeMs || systemTime.getTime();

        expect(result.ellapsedMS).toEqual(ellapsedTimeMs);
        expect(result.totalTimeMS).toEqual(timerDurationMs);
        expect(result.endTimeMS).toEqual(
            startTimeMs + timerDurationMs + (pausedForMs || 0)
        );
        expect(result.isPaused).toBe(pausedForMs !== null);
        expect(result.hasStarted).toBe(timerStartTimeMs !== null);
        expect(result.hasEnded).toBe(ellapsedTimeMs >= timerDurationMs);
    };

    it('getCurrentState returns expected result for new timer', () => {
        const timerDurationMins = 20;
        const timer = new Timer(timerDurationMins);

        const result = timer.getCurrentState();

        const pausedForMs = null;
        const timerStartTimeMs = null;
        const ellapsedTimeMs = 0;
        checkResultingState(result, timerDurationMins, pausedForMs, timerStartTimeMs, ellapsedTimeMs);
    });

    it('start & getCurrentState return expected result (timer not yet started)', () => {
        const timerDurationMins = 25;
        const timer = new Timer(timerDurationMins);

        const newSystemTime = new Date().setSeconds(30);
        jest.setSystemTime(newSystemTime);

        const result = timer.start();
        const currentState = timer.getCurrentState();

        expect(result).toMatchObject(currentState);

        const pausedForMs = null;
        const ellapsedTimeMs = 0;
        checkResultingState(result, timerDurationMins, pausedForMs, newSystemTime, ellapsedTimeMs);
    });

    it('start & getCurrentState return expected result (timer already started)', () => {
        const timerDurationMins = 25;
        const timer = new Timer(timerDurationMins);

        const initialState = timer.start();

        const newSystemTime = new Date().setSeconds(30);
        jest.setSystemTime(newSystemTime);

        const stateAfterStart = timer.start();
        const currentState = timer.getCurrentState();

        expect(stateAfterStart).toMatchObject(initialState);
        expect(stateAfterStart).toMatchObject(currentState);

        const pausedForMs = null;
        const timerStartTimeMs = systemTime.getTime();
        const ellapsedTimeMs = 0;
        checkResultingState(currentState, timerDurationMins, pausedForMs, timerStartTimeMs, ellapsedTimeMs);
    });
});
