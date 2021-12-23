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
    const [currentTimerState, setCurrentTimerState] =
        useState<ICurrentTimerState>({
            ellapsedMS: 0,
            totalTimeMS: 0,
            endTimeMS: 0,
            isPaused: false,
            hasStarted: false,
            hasEnded: false,
        });

    let intervalId: NodeJS.Timeout | null = null;

    const createTimer = (durationMinutes: number) => {
        timer.instance = new Timer(durationMinutes);
        setCurrentTimerState(timer.instance.getCurrentState());
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
