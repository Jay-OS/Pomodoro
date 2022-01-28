import React, { useContext } from 'react';

import TimerContext from '../../../domain/contexts/timerState';

import { millisecondsToMinutesAndSecondsString } from '../../../utils/time';

import Timer from './Timer';

const TimerController = () => {
    const timerState = useContext(TimerContext);
    const currentTimer = timerState.currentTimer;

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
        />
    );
};

export default TimerController;
