import React from 'react';
import { Formik, Form, FormikHelpers } from 'formik';
import { css } from 'aphrodite/no-important';
import * as Yup from 'yup';
import { MdPlaylistAddCheck } from 'react-icons/md';

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
    showSaveSuccess: boolean;
}

const TodoItemForm = ({ onSubmit, showSaveSuccess }: ITodoItemForm) => {
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
        <>
            <h1
                id="todoList-todoForm-heading"
                className={css(todoItemFormStyles.heading)}
            >
                Add a new 'to do' item
            </h1>
            <Formik
                initialValues={initialValues}
                validationSchema={Yup.object().shape(validation)}
                onSubmit={onSubmit}
            >
                <Form id="todoList-todoForm">
                    <div
                        id="todoList-todoForm-inputs"
                        className={css(todoItemFormStyles.todoFormContainer)}
                    >
                        <TextInput
                            {...createPomodoroFormFields.title.props}
                            disabled={showSaveSuccess}
                        />
                        <TextInput
                            {...createPomodoroFormFields.description.props}
                            disabled={showSaveSuccess}
                        />
                    </div>
                    <div
                        className={css(todoItemFormStyles.submitArea)}
                        id="todoList-todoForm-submit"
                    >
                        <MdPlaylistAddCheck
                            id="todoList-todoForm-success-icon"
                            className={css(
                                todoItemFormStyles.successIcon,
                                showSaveSuccess
                                    ? todoItemFormStyles.successIconVisible
                                    : undefined
                            )}
                        />
                        <FormButton
                            buttonType={buttonTypes.ADD_BUTTON}
                            disabled={showSaveSuccess}
                        />
                    </div>
                </Form>
            </Formik>
        </>
    );
};

export default TodoItemForm;
