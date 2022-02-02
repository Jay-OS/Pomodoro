import * as React from 'react';
import { css } from 'aphrodite/no-important';
import { useButton } from '@react-aria/button';

import { buttonTypes, buttons } from '../../../constants/forms/buttons';

import formButtonStyles from './FormButtonStyles';

export interface FormButtonProps {
    buttonType: buttonTypes;
    disabled: boolean;
}

const FormButton = ({ buttonType, disabled }: FormButtonProps) => {
    const buttonRef = React.useRef<HTMLButtonElement>(null);
    const btnProps = {
        ...buttons[buttonType]?.props,
    };
    const { buttonProps } = useButton(btnProps, buttonRef);

    return (
        <button
            {...buttonProps}
            className={css(
                formButtonStyles.button,
                formButtonStyles[buttonType]
            )}
            disabled={disabled}
            ref={buttonRef}
        >
            {buttons[buttonType]?.label}
        </button>
    );
};

export default FormButton;
