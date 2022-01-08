import React, { useContext } from 'react';

import TimerContext from '../../../domain/contexts/timerState';

import { millisecondsToMinutesAndSecondsString } from '../../../utils/time';

import Timer from './Timer';

const TimerController = () => {
    const timerState = useContext(TimerContext);
    const currentTimer = timerState.currentTimer;

    const timerExists =
        currentTimer.totalTimeMS !== undefined &&
        currentTimer.ellapsedMS !== undefined;
    const timerRemainingMS =
        currentTimer.totalTimeMS !== undefined &&
        currentTimer.ellapsedMS !== undefined
            ? currentTimer.totalTimeMS - currentTimer.ellapsedMS
            : undefined;
    const timeRemaining =
        millisecondsToMinutesAndSecondsString(timerRemainingMS);

    return (
        <Timer
            minutesAndSeconds={timeRemaining}
            showControls={timerExists}
            hasStarted={currentTimer.hasStarted}
            isPaused={currentTimer.isPaused}
            toggleTimerPause={timerState.toggleTimerPause}
            startTimer={timerState.startTimer}
        />
    );
};

export default TimerController;
