import React, { useContext } from 'react';

import TimerContext from '../../../domain/contexts/timerState';

import TimerControls from './TimerControls';

const TimerControlsController = () => {
    const timerState = useContext(TimerContext);
    const currentTimer = timerState.currentTimer;

    const timerExists =
        currentTimer.totalTimeMS !== undefined &&
        currentTimer.ellapsedMS !== undefined;

    return (
        <TimerControls
            enableControls={timerExists}
            hasStarted={currentTimer.hasStarted}
            isPaused={currentTimer.isPaused}
            toggleTimerPause={timerState.toggleTimerPause}
            startTimer={timerState.startTimer}
        />
    );
};

export default TimerControlsController;
