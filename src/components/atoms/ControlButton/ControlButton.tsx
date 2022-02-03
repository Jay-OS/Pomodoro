import * as React from 'react';
import { css } from 'aphrodite/no-important';
import { useButton } from '@react-aria/button';

import AddClassName from '../AddClassName';

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
}

const ControlButton: React.FC<ControlButtonProps> = ({
    id,
    title,
    onClick,
    disabled,
    'aria-label': ariaLabel,
    buttonType,
    buttonSize,
    children,
}) => {
    const buttonRef = React.useRef<HTMLButtonElement>(null);
    const btnProps = {
        id: id,
        title: title,
        disabled: disabled,
        onClick: onClick,
        'aria-label': ariaLabel,
    };
    const { buttonProps } = useButton(btnProps, buttonRef);

    return (
        <button
            {...buttonProps}
            className={css(
                controlButtonStyles.controlButton,
                controlButtonStyles[buttonType],
                controlButtonStyles[buttonSize]
            )}
            ref={buttonRef}
        >
            <AddClassName className={css(controlButtonStyles.verticalCenter)}>
                {children}
            </AddClassName>
        </button>
    );
};

export default ControlButton;
