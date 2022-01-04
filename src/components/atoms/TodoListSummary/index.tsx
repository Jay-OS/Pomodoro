import React, { useContext, useState, useEffect } from 'react';

import TodoListSummary from './TodoListSummary';

import TodoListStateContext from '../../../domain/contexts/todoListState';
import TimerContext from '../../../domain/contexts/timerState';

import { todoItemTypes } from '../../../domain/entities/todoItems';

const TodoListSummaryController = () => {
    const todoListContext = useContext(TodoListStateContext);
    const todoListState = todoListContext.currentListState;
    const timerState = useContext(TimerContext);

    const [todoCount, setTodoCount] = useState<number>(0);
    const [completedTodoCount, setCompletedTodoCount] = useState<number>(0);
    const [totalTimeLeft, setTotalTimeLeft] = useState<number>(0);
    const [currentItemType, setCurrentItemType] = useState<todoItemTypes>();
    const [currentTimerMinutes, setCurrentTimerMinutes] = useState<number>(0);

    useEffect(() => {
        const todoCount = todoListState.list.filter(
            (value) => value.itemType === todoItemTypes.POMODORO
        ).length;
        setTodoCount(todoCount);

        const completedTodoCount = todoListState.list.filter(
            (value) =>
                value.itemType === todoItemTypes.POMODORO &&
                value.isComplete === true
        ).length;
        setCompletedTodoCount(completedTodoCount);
    }, [todoListState.list, todoListState.list.length]);

    useEffect(() => {
        if (todoListState.currentItemIndex !== undefined) {
            const currentItemType =
                todoListState.list[todoListState.currentItemIndex]
                    .itemType;
            setCurrentItemType(currentItemType);
        }
    }, [todoListState.list, todoListState.list.length, todoListState.currentItemIndex]);

    useEffect(() => {
        const totalTimeLeft = todoListState.list
            .filter((value) => value.isComplete === false)
            .reduce(
                (partialSum, item) =>
                    partialSum + todoListContext.itemDurationsMins[item.itemType],
                0
            );
        setTotalTimeLeft(totalTimeLeft);
    }, [todoListState.list, todoListState.list.length, todoListContext.itemDurationsMins]);

    useEffect(() => {
        setCurrentTimerMinutes(
            Math.ceil((timerState.currentTimer.ellapsedMS || 0) / 1000 / 60)
        );
    }, [timerState.currentTimer.ellapsedMS]);

    let totalTodoTimeLeft =
        (todoCount - completedTodoCount) *
        todoListContext.itemDurationsMins[todoItemTypes.POMODORO];
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
