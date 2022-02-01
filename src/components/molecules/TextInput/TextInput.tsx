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
        <div
            id={`${props.id}-input-container`}
            className={css(textInputStyles.container)}
        >
            <div className={css(textInputStyles.inputContainer)}>
                {!!label && (
                    <label
                        id={`${props.id}-input-label`}
                        htmlFor={props.id || props.name}
                        className={css(textInputStyles.label)}
                    >
                        {label}
                    </label>
                )}
                <input
                    {...field}
                    {...props}
                    id={`${props.id}-input`}
                    className={inputClassName}
                    aria-errormessage={
                        !isInputValid ? `${props.id}-input-error` : undefined
                    }
                />
            </div>
            {!isInputValid && (
                <span
                    id={`${props.id}-input-error`}
                    className={css(textInputStyles.validationError)}
                >
                    {meta.error}
                </span>
            )}
        </div>
    );
};

export default TextInput;
