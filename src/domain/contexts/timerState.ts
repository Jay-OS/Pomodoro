import React from 'react';

import { ICurrentTimerState } from '../entities/timer';

export interface ITimerState {
    currentTimer: ICurrentTimerState;
    createTimer: (durationMinutes: number) => void;
    toggleTimerPause: () => void;
    startTimer: () => void;
};

const TimerStateContext = React.createContext<ITimerState>(
    {
        currentTimer: {
            ellapsedMS: 0,
            totalTimeMS: 0,
            endTimeMS: 0,
            isPaused: false,
            hasStarted: false,
            hasEnded: false,
        },
        createTimer: (durationMinutes) => {},
        toggleTimerPause: () => {},
        startTimer: () => {},
    }
);

export default TimerStateContext;
