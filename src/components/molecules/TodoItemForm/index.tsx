import React, { useContext, useState } from 'react';
import { FormikHelpers } from 'formik';

import TodoItemForm from './TodoItemForm';

import TodoListStateContext from '../../../domain/contexts/todoListState';

import { PomodoroFormFieldValues } from '../../../constants/forms/formFields/createPomodoroFormFields';

const TodoItemFormController = () => {
    const todoListState = useContext(TodoListStateContext);
    const [showSaveSuccess, setShowSaveSuccess] = useState<boolean>(false);

    const onSubmit = (
        values: PomodoroFormFieldValues,
        helpers: FormikHelpers<PomodoroFormFieldValues>
    ) => {
        todoListState.addItem(values);
        setShowSaveSuccess(true);
        setTimeout(() => onSaveComplete(helpers.resetForm), 1000);
    };

    const onSaveComplete = (resetForm: () => void) => {
        setShowSaveSuccess(false);
        resetForm();
    };

    return (
        <TodoItemForm onSubmit={onSubmit} showSaveSuccess={showSaveSuccess} />
    );
};

export default TodoItemFormController;
