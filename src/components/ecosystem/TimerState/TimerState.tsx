import React, { useState } from 'react';

import TimerStateContext, {
    ITimerState,
} from '../../../domain/contexts/timerState';
import timer, {
    Timer,
    ICurrentTimerState,
} from '../../../domain/entities/timer';

import config from '../../../constants/config';

const TimerState: React.FC<{}> = ({ children }) => {
    const defaultTimerState: ICurrentTimerState = {
        ellapsedMS: undefined,
        totalTimeMS: undefined,
        endTimeMS: 0,
        isPaused: false,
        hasStarted: false,
        hasEnded: false,
    }

    const [currentTimerState, setCurrentTimerState] = useState<ICurrentTimerState>(defaultTimerState);

    let intervalId: NodeJS.Timeout | null = null;

    const createTimer = (durationMinutes: number) => {
        timer.instance = new Timer(durationMinutes);
        setCurrentTimerState(timer.instance.getCurrentState());
    };

    const clearTimer = () => {
        timer.instance = null;
        if (intervalId) {
            clearInterval(intervalId);
            intervalId = null;
        }
        setCurrentTimerState(defaultTimerState);
    };

    const toggleTimerPause = () => {
        if (timer.instance) {
            setCurrentTimerState(timer.instance.togglePause());
        }
    };

    const updateTimer = () => {
        if (timer.instance) {
            setCurrentTimerState(timer.instance.update());
            if (currentTimerState.hasEnded && intervalId) {
                clearInterval(intervalId);
                intervalId = null;
            }
        }
    };

    const startTimer = () => {
        if (timer.instance && !currentTimerState.hasStarted) {
            timer.instance.start();
            updateTimer();
            intervalId = setInterval(
                updateTimer,
                config.timerRefreshIntervalMS
            );
        }
    };

    const timerState: ITimerState = {
        currentTimer: currentTimerState,
        createTimer: createTimer,
        clearTimer: clearTimer,
        toggleTimerPause: toggleTimerPause,
        startTimer: startTimer,
    };

    return (
        <TimerStateContext.Provider value={timerState}>
            {children}
        </TimerStateContext.Provider>
    );
};

export default TimerState;
