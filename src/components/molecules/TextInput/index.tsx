import React from 'react';
import { FieldHookConfig, useField } from 'formik';

import TextInput from './TextInput';

interface TextInputControllerProps extends React.HTMLProps<HTMLInputElement> {
    label?: string;
}

const TextInputController = (
    props: TextInputControllerProps & FieldHookConfig<string | number>
) => {
    const [field, meta] = useField(props);
    const isInputValid = !meta.touched || !meta.error;

    return (
        <TextInput
            {...props}
            field={field}
            isValid={isInputValid}
            error={meta.error}
        />
    );
};

export default TextInputController;
