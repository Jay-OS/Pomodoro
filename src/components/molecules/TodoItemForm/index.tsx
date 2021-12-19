import React, { useContext } from 'react';
import { FormikHelpers } from "formik";

import TodoItemForm from './TodoItemForm';

import AppStateContext from '../../../domain/contexts/appState';

import { PomodoroFormFieldValues } from '../../../constants/forms/formFields/createPomodoroFormFields';

const TodoItemFormController = () => {
    const appState = useContext(AppStateContext);

    const onSubmit = (values: PomodoroFormFieldValues, helpers: FormikHelpers<PomodoroFormFieldValues>) => {
        appState.todoList.addItem(values);
        helpers.resetForm();
    };

    return (
        <TodoItemForm
            onSubmit={onSubmit}
        />
    );
};

export default TodoItemFormController;
