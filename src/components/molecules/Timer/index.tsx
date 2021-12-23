import React, { useContext } from 'react';

import TimerContext from '../../../domain/contexts/timerState';

import Timer from './Timer';

const TimerController = () => {
    const timerState = useContext(TimerContext);

    return (
        <Timer
            currentTimer={timerState.currentTimer}
            toggleTimerPause={timerState.toggleTimerPause}
            startTimer={timerState.startTimer}
        />
    );
};

export default TimerController;
