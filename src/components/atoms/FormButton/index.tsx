import React, { useState, useEffect } from 'react';
import { useFormikContext } from 'formik';

import { buttonTypes } from '../../../constants/forms/buttons';

import FormButton, { FormButtonProps } from './FormButton';

const FormButtonController = ({ buttonType, disabled }: FormButtonProps) => {
    const { errors, touched } = useFormikContext();
    const [isDisabled, setIsDisabled] = useState<boolean>(disabled);

    useEffect(() => {
        if (buttonType === buttonTypes.RESET_BUTTON || disabled) {
            setIsDisabled(disabled);
            return;
        }

        const errorKeys = Object.keys(errors);
        const invalidFieldsHaveBeenTouched =
            !!errorKeys.length &&
            errorKeys.some((key) => touched.hasOwnProperty(key));

        setIsDisabled(invalidFieldsHaveBeenTouched);
    }, [errors, touched, disabled, buttonType]);

    return <FormButton buttonType={buttonType} disabled={isDisabled} />;
};

export default FormButtonController;
