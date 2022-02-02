import * as React from 'react';
import { css } from 'aphrodite/no-important';
import { FieldInputProps } from 'formik';
import { useTextField } from '@react-aria/textfield';

import textInputStyles from './TextInputStyles';

interface TextInputProps {
    id?: string;
    name?: string;
    disabled?: boolean;
    placeholder?: string;
    type?: string;
    label?: string;
    isValid: boolean;
    field: FieldInputProps<string | number>;
    error?: string;
}

const TextInput = ({
    id,
    name,
    disabled,
    placeholder,
    type,
    label,
    isValid,
    field,
    error,
}: TextInputProps) => {
    const inputClassName = css(
        textInputStyles.input,
        !isValid && textInputStyles.invalidInput
    );

    const fieldProps = {
        name,
        id: `${id}-input`,
        placeholder: placeholder,
        type: type,
    };

    const inputRef = React.useRef<HTMLInputElement>(null);
    const { labelProps, inputProps, descriptionProps, errorMessageProps } =
        useTextField(fieldProps, inputRef);

    return (
        <div
            id={`${id}-input-container`}
            className={css(textInputStyles.container)}
        >
            <div className={css(textInputStyles.inputContainer)}>
                {!!label && (
                    <label
                        {...labelProps}
                        htmlFor={`${id}-input`}
                        className={css(textInputStyles.label)}
                    >
                        {label}
                    </label>
                )}
                <input
                    {...inputProps}
                    {...field}
                    aria-invalid={isValid ? undefined : true}
                    className={inputClassName}
                    disabled={disabled}
                    ref={inputRef}
                />
            </div>
            <span {...descriptionProps} className={css(textInputStyles.hidden)}>
                {placeholder}
            </span>
            {!isValid && (
                <span
                    {...errorMessageProps}
                    className={css(textInputStyles.validationError)}
                >
                    {error}
                </span>
            )}
        </div>
    );
};

export default TextInput;
