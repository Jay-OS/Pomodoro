import * as React from 'react';
import { css } from 'aphrodite/no-important';
import { useFormikContext } from 'formik';

import { buttonTypes, buttons } from '../../../constants/forms/buttons'

import formButtonStyles from './FormButtonStyles';

interface FormButtonProps {
    buttonType: buttonTypes,
};

const FormButton: React.FC<FormButtonProps> = (props) => {
    const { errors, touched } = useFormikContext();

    const errorKeys = Object.keys(errors);
    const invalidFieldsHaveBeenTouched = 
        !!errorKeys.length && errorKeys.some(key => touched.hasOwnProperty(key));

    return (
        <button {...buttons[props.buttonType]?.props}
            disabled={invalidFieldsHaveBeenTouched && props.buttonType !== buttonTypes.RESET_BUTTON}
            className={css(formButtonStyles.button, formButtonStyles[props.buttonType])}
        >
            {buttons[props.buttonType]?.label}
        </button>
    );
};

export default FormButton;
