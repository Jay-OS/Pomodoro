
import React from 'react';
import { MdPlayArrow, MdPause } from 'react-icons/md';

import ControlButton, { controlButtonType, controlButtonSize } from '../../atoms/ControlButton';

interface ITimerControls {
    enableControls: boolean;
    hasStarted: boolean;
    isPaused: boolean;
    toggleTimerPause: React.MouseEventHandler<HTMLButtonElement>;
    startTimer: () => void;
};

const TimerControls = ({
    enableControls,
    hasStarted,
    isPaused,
    toggleTimerPause,
    startTimer,
}: ITimerControls) => (
    <>
        {hasStarted ?
            <ControlButton
                id="timer-controls-playPauseButton"
                key="timerStartStop"
                aria-label={isPaused ? "Start timer" : "Pause timer"}
                onClick={toggleTimerPause}
                buttonType={controlButtonType.PRIMARY}
                buttonSize={controlButtonSize.LARGE}
            >
                {isPaused ? <MdPlayArrow /> : <MdPause />}
            </ControlButton>
        :
            <ControlButton
                id="timer-controls-playPauseButton"
                key="timerStartStop"
                aria-label="Start timer"
                onClick={startTimer}
                buttonType={controlButtonType.PRIMARY}
                buttonSize={controlButtonSize.LARGE}
            >
                <MdPlayArrow />
            </ControlButton>
        }
    </>
);

export default TimerControls;
