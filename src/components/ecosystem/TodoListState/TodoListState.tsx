import React, { useEffect, useState } from 'react';

import TodoListStateContext, { ITodoListState } from '../../../domain/contexts/todoListState';

import defaultTimesInMinutes, {
    defaultTimesInMinutesType,
} from '../../../constants/defaultTimesInMinutes';

import { PomodoroFormFieldValues, PomodoroFormFieldNames } from '../../../constants/forms/formFields/createPomodoroFormFields';

import { todoItemShape, createPomodoro } from '../../../domain/entities/todoItems';

import { getTodoListWithBreaks } from '../../../domain/entities/helpers/todoItemHelpers';

interface ITodoListStateComponent {
    createTimer: (durationMinutes: number) => void,
};

const TodoListState: React.FC<ITodoListStateComponent> = ({ children, createTimer }) => {
    const [todoList, setTodoList] = useState<todoItemShape[]>([]);
    const [todoListWithBreaks, setTodoListWithBreaks] =
        useState<todoItemShape[]>([]);
    const [currentTodoItemIndex, setCurrentTodoItemIndex] =
        useState<number | undefined>();

    const [todoListItemDurations, setTodoListItemDurations] =
        useState<defaultTimesInMinutesType>(defaultTimesInMinutes);

    const createTodoListWithBreaks = () => {
        const newTodoList = getTodoListWithBreaks(todoList);
        setTodoListWithBreaks(newTodoList);
    };
    useEffect(createTodoListWithBreaks, [todoList]);

    const addTodoItem = (values: PomodoroFormFieldValues) => {
        const pomodoro = createPomodoro(
            values[PomodoroFormFieldNames.POMODORO_TITLE],
            values[PomodoroFormFieldNames.POMODORO_DESCRIPTION]
        );
        const newTodoList = [...todoList, pomodoro];

        setTodoList(newTodoList);

        if (newTodoList.length === 1) {
            setCurrentTodoItemIndex(0);
            const timerDurationMins = todoListItemDurations[newTodoList[0].itemType];
            createTimer(timerDurationMins);
        }
    };

    const todoListState: ITodoListState = {
        original: todoList,
        withBreaks: todoListWithBreaks,
        currentItemIndex: currentTodoItemIndex,
        addItem: addTodoItem,
        itemDurationsMins: todoListItemDurations,
        setDurations: setTodoListItemDurations,
    };

    return <TodoListStateContext.Provider value={todoListState}>
        {children}
    </TodoListStateContext.Provider>;
};

export default TodoListState;
