import * as React from 'react';
import { css } from 'aphrodite/no-important';

import { controlButtonType, controlButtonSize } from './ControlButtonEnums';

import controlButtonStyles from './ControlButtonStyles';

interface ControlButtonProps {
    id?: string;
    onClick: () => void;
    disabled?: boolean;
    ['aria-label']: string;
    buttonType: controlButtonType;
    buttonSize: controlButtonSize;
};

const ControlButton: React.FC<ControlButtonProps> = (props) => (
    <button
        id={props.id}
        className={css(controlButtonStyles.controlButton, controlButtonStyles[props.buttonType], controlButtonStyles[props.buttonSize])}
        disabled={props.disabled}
        onClick={props.onClick}
        aria-label={props['aria-label']}
    >
        {props.children}
    </button>
);

export default ControlButton;
