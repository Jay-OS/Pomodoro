import * as React from 'react';
import { css } from 'aphrodite/no-important';

import { controlButtonType, controlButtonSize } from './ControlButtonEnums';

import controlButtonStyles from './ControlButtonStyles';

export interface ControlButtonProps {
    id?: string;
    title?: string;
    onClick: React.MouseEventHandler<HTMLButtonElement>;
    disabled?: boolean;
    ['aria-label']: string;
    buttonType: controlButtonType;
    buttonSize: controlButtonSize;
};

const ControlButton: React.FC<ControlButtonProps> = ({
    id,
    title,
    onClick,
    disabled,
    'aria-label': ariaLabel,
    buttonType,
    buttonSize,
    children
}) => (
    <button
        id={id}
        title={title}
        className={css(controlButtonStyles.controlButton, controlButtonStyles[buttonType], controlButtonStyles[buttonSize])}
        disabled={disabled}
        onClick={onClick}
        aria-label={ariaLabel}
    >
        {children}
    </button>
);

export default ControlButton;
