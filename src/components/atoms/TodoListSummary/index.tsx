import React, { useContext, useState, useEffect } from 'react';

import TodoListSummary from './TodoListSummary';

import TodoListStateContext from '../../../domain/contexts/todoListState';
import TimerContext from '../../../domain/contexts/timerState';

import { todoItemTypes } from '../../../domain/entities/todoItems';

const TodoListSummaryController = () => {
    const todoListState = useContext(TodoListStateContext);
    const timerState = useContext(TimerContext);

    const [todoCount, setTodoCount] = useState<number>(0);
    const [completedTodoCount, setCompletedTodoCount] = useState<number>(0);
    const [totalTimeLeft, setTotalTimeLeft] = useState<number>(0);
    const [currentItemType, setCurrentItemType] = useState<todoItemTypes>();
    const [currentTimerMinutes, setCurrentTimerMinutes] = useState<number>(0);

    useEffect(() => {
        const todoCount = todoListState.withBreaks.filter(
            (value) => value.itemType === todoItemTypes.POMODORO
        ).length;
        setTodoCount(todoCount);

        const completedTodoCount = todoListState.withBreaks.filter(
            (value) =>
                value.itemType === todoItemTypes.POMODORO &&
                value.isComplete === true
        ).length;
        setCompletedTodoCount(completedTodoCount);
    }, [todoListState.withBreaks]);

    useEffect(() => {
        if (todoListState.currentItemIndex !== undefined) {
            const currentItemType =
                todoListState.withBreaks[todoListState.currentItemIndex]
                    .itemType;
            setCurrentItemType(currentItemType);
        }
    }, [todoListState.withBreaks, todoListState.currentItemIndex]);

    useEffect(() => {
        const totalTimeLeft = todoListState.withBreaks
            .filter((value) => value.isComplete === false)
            .reduce(
                (partialSum, item) =>
                    partialSum + todoListState.itemDurationsMins[item.itemType],
                0
            );
        setTotalTimeLeft(totalTimeLeft);
    }, [todoListState.withBreaks, todoListState.itemDurationsMins]);

    useEffect(() => {
        setCurrentTimerMinutes(
            Math.ceil(timerState.currentTimer.ellapsedMS / 1000 / 60)
        );
    }, [timerState.currentTimer.ellapsedMS]);

    let totalTodoTimeLeft =
        (todoCount - completedTodoCount) *
        todoListState.itemDurationsMins[todoItemTypes.POMODORO];
    if (currentItemType === todoItemTypes.POMODORO) {
        totalTodoTimeLeft -= currentTimerMinutes;
    }

    const adjustedTotalTimeLeft = totalTimeLeft - currentTimerMinutes;

    return (
        <TodoListSummary
            todoCount={todoCount}
            completedTodoCount={completedTodoCount}
            totalTimeLeft={adjustedTotalTimeLeft}
            totalTodoTimeLeft={totalTodoTimeLeft}
        />
    );
};

export default TodoListSummaryController;
