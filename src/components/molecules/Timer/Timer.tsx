import React from 'react';
import { css } from 'aphrodite/no-important';

import timerStyles from './TimerStyles';

import { millisecondsToMinutesAndSecondsString } from '../../../utils/time';

import { ICurrentTimerState } from '../../../domain/entities/timer';

interface ITimer {
    currentTimer: ICurrentTimerState,
    toggleTimerPause: () => void,
    startTimer: () => void,
};

const Timer = ({ currentTimer, toggleTimerPause, startTimer }: ITimer) => {
    const timerRemainingMS = currentTimer.totalTimeMS - currentTimer.ellapsedMS;
    const timeRemaining = millisecondsToMinutesAndSecondsString(timerRemainingMS);

    return (
        <div className={css(timerStyles.timerContainer)}>
            <span className={css(timerStyles.timerContainerItem, timerStyles.timerDisplay)}>
                <span className={css(timerStyles.timerDisplayValues)}>{timeRemaining.minutes}</span>mins &nbsp;
                <span className={css(timerStyles.timerDisplayValues)}>{timeRemaining.seconds}</span>secs
            </span>
            <span className={css(timerStyles.timerContainerItem)}>
                {!currentTimer.hasStarted &&
                    <button onClick={startTimer}>Start</button>}
                {currentTimer.hasStarted &&
                    <button onClick={toggleTimerPause}>{currentTimer.isPaused ? 'Unpause' : 'Pause'}</button>}
            </span>
        </div>
    );
}

export default Timer;
