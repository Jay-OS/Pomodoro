import React, { useContext } from 'react';
import { FormikHelpers } from "formik";

import TodoItemForm from './TodoItemForm';

import TodoListStateContext from '../../../domain/contexts/todoListState';

import { PomodoroFormFieldValues } from '../../../constants/forms/formFields/createPomodoroFormFields';

const TodoItemFormController = () => {
    const todoListState = useContext(TodoListStateContext);

    const onSubmit = (values: PomodoroFormFieldValues, helpers: FormikHelpers<PomodoroFormFieldValues>) => {
        todoListState.addItem(values);
        helpers.resetForm();
    };

    return (
        <TodoItemForm
            onSubmit={onSubmit}
        />
    );
};

export default TodoItemFormController;
