import React from 'react';
import { css } from 'aphrodite/no-important';

import timerStyles from './TimerStyles';

import { MinutesAndSecondsString } from '../../../utils/time';

interface ITimer {
    minutesAndSeconds: MinutesAndSecondsString;
    showControls: boolean;
    hasStarted: boolean;
    isPaused: boolean;
    toggleTimerPause: () => void;
    startTimer: () => void;
}

const Timer = ({
    minutesAndSeconds,
    showControls,
    hasStarted,
    isPaused,
    toggleTimerPause,
    startTimer,
}: ITimer) => {
    return (
        <section id="timer" className={css(timerStyles.timerContainer)}>
            <h2 className={css(timerStyles.hidden)}>Current timer</h2>
            <span
                id="timerDisplay"
                className={css(
                    timerStyles.timerContainerItem,
                    timerStyles.timerDisplay
                )}
            >
                <span
                    id="timerDisplay.minutes"
                    className={css(timerStyles.timerDisplayValues)}
                >
                    {minutesAndSeconds.minutes}
                </span>
                mins &nbsp;
                <span
                    id="timerDisplay.seconds"
                    className={css(timerStyles.timerDisplayValues)}
                >
                    {minutesAndSeconds.seconds}
                </span>
                secs
            </span>
            {showControls && (
                <span
                    id="timerControls"
                    className={css(timerStyles.timerContainerItem)}
                >
                    {!hasStarted && (
                        <button id="playPauseButton" onClick={startTimer}>
                            Start
                        </button>
                    )}
                    {hasStarted && (
                        <button id="playPauseButton" onClick={toggleTimerPause}>
                            {isPaused ? 'Unpause' : 'Pause'}
                        </button>
                    )}
                </span>
            )}
        </section>
    );
};

export default Timer;
