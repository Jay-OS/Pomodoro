import React from 'react';
import { css } from 'aphrodite/no-important';

import TimerControls from '../TimerControls';

import timerStyles from './TimerStyles';

import { MinutesAndSecondsString } from '../../../utils/time';

interface ITimer {
    minutesAndSeconds: MinutesAndSecondsString;
}

const Timer = ({
    minutesAndSeconds,
}: ITimer) => (
    <section id="timer" aria-labelledby="timer-heading" className={css(timerStyles.timerContainer)}>
        <h2 id="timer-heading" className={css(timerStyles.hidden)}>Current timer</h2>
        <span
            id="timer-display"
            className={css(
                timerStyles.timerContainerItem,
                timerStyles.timerDisplay
            )}
        >
            <span
                id="timer-display-minutes"
                className={css(timerStyles.timerDisplayValues)}
            >
                {minutesAndSeconds.minutes}
            </span>
            mins &nbsp;
            <span
                id="timer-display-seconds"
                className={css(timerStyles.timerDisplayValues)}
            >
                {minutesAndSeconds.seconds}
            </span>
            secs
        </span>
        <span
            id="timer-controls"
            className={css(timerStyles.timerContainerItem)}
        >
            <TimerControls />
        </span>
    </section>
);

export default Timer;
