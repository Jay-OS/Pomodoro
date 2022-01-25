import React from 'react';
import { Formik, Form, FormikHelpers } from 'formik';
import { css } from 'aphrodite/no-important';
import * as Yup from 'yup';

import TextInput from '../TextInput';
import createPomodoroFormFields, {
    PomodoroFormFieldValues,
    PomodoroFormFieldNames,
} from '../../../constants/forms/formFields/createPomodoroFormFields';

import FormButton from '../../atoms/FormButton';
import { buttonTypes } from '../../../constants/forms/buttons';

import todoItemFormStyles from './TodoItemFormStyles';
interface ITodoItemForm {
    onSubmit: (
        values: PomodoroFormFieldValues,
        helpers: FormikHelpers<PomodoroFormFieldValues>
    ) => void;
}

const TodoItemForm = ({ onSubmit }: ITodoItemForm) => {
    const initialValues = {
        [PomodoroFormFieldNames.POMODORO_TITLE]: '',
        [PomodoroFormFieldNames.POMODORO_DESCRIPTION]: '',
    };

    let validation = {};
    if (createPomodoroFormFields.title.validation) {
        validation = {
            [createPomodoroFormFields.title.props.name]:
                createPomodoroFormFields.title.validation,
        };
    }
    if (createPomodoroFormFields.description.validation) {
        validation = {
            ...validation,
            [createPomodoroFormFields.description.props.name]:
                createPomodoroFormFields.description.validation,
        };
    }

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={Yup.object().shape(validation)}
            onSubmit={onSubmit}
        >
            <Form id="todoList-todoForm" className={css(todoItemFormStyles.todoFormContainer)}>
                <h2 id="todoList-todoForm-heading" className={css(todoItemFormStyles.H2)}>
                    Add a new 'to do' item
                </h2>
                <TextInput {...createPomodoroFormFields.title.props} />
                <TextInput {...createPomodoroFormFields.description.props} />
                <FormButton buttonType={buttonTypes.ADD_BUTTON} />
            </Form>
        </Formik>
    );
};

export default TodoItemForm;
