import * as React from 'react';
import { css } from 'aphrodite/no-important';
import { FieldHookConfig, useField } from 'formik';

import textInputStyles from './TextInputStyles';

type TextInputProps = {
    label?: string;
};

const TextInput: React.FC<
    TextInputProps &
        React.HTMLProps<HTMLInputElement> &
        FieldHookConfig<string | number>
> = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    const isInputValid = !meta.touched || !meta.error;

    const inputClassName = css(
        textInputStyles.input,
        !isInputValid && textInputStyles.invalidInput
    );

    return (
        <div className={css(textInputStyles.container)}>
            <div className={css(textInputStyles.inputContainer)}>
                {!!label && (
                    <label
                        htmlFor={props.id || props.name}
                        className={css(textInputStyles.label)}
                    >
                        {label}
                    </label>
                )}
                <input {...field} {...props} className={inputClassName} />
            </div>
            {!isInputValid && (
                <span className={css(textInputStyles.validationError)}>
                    {meta.error}
                </span>
            )}
        </div>
    );
};

export default TextInput;
