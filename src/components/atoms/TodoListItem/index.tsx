import React, { useContext, useState, useEffect } from 'react';

import TodoListItem from './TodoListItem';

import TodoListStateContext from '../../../domain/contexts/todoListState';
import TimerContext from '../../../domain/contexts/timerState';

import { todoItemTypes } from '../../../domain/entities/todoItems';

interface ITodoListItemController {
    todoItemIndex: number;
    id?: string;
}

const TodoListItemController = ({ todoItemIndex, id }: ITodoListItemController) => {
    const [itemDuration, setItemDuration] = useState<number>(0);
    const [isCurrentItem, setIsCurrentItem] = useState<boolean>(false);
    const [canBeDeleted, setCanBeDeleted] = useState<boolean>(false);
    const [currentTimerMinutes, setCurrentTimerMinutes] = useState<number>(0);

    const todoListContext = useContext(TodoListStateContext);
    const todoListState = todoListContext.currentListState;
    const timerState = useContext(TimerContext);

    const todoItem = todoListState.list[todoItemIndex];

    useEffect(() => {
        setIsCurrentItem(todoItemIndex === todoListState.currentItemIndex);
    }, [todoItemIndex, todoListState.currentItemIndex]);

    useEffect(() => {
        setCurrentTimerMinutes(
            Math.ceil((timerState.currentTimer.ellapsedMS || 0) / 1000 / 60)
        );
    }, [timerState.currentTimer.ellapsedMS]);

    useEffect(() => {
        setItemDuration(todoListContext.itemDurationsMins[todoItem.itemType]);
    }, [todoListContext.itemDurationsMins, todoItem.itemType]);

    useEffect(() => {
        const currentActiveItem = isCurrentItem && timerState.currentTimer.hasStarted;
        const canBeDeleted = !todoItem.isComplete
            && todoItem.itemType === todoItemTypes.POMODORO
            && !currentActiveItem;
        setCanBeDeleted(canBeDeleted);
    }, [isCurrentItem, todoItem.id, todoItem.isComplete, todoItem.itemType, timerState.currentTimer.hasStarted]);

    const deleteAction: React.MouseEventHandler<HTMLButtonElement> = () => todoListContext.deleteItem(todoItem.id);

    const remainingTimeMins = isCurrentItem
        ? itemDuration - currentTimerMinutes
        : itemDuration;

    return (
        <TodoListItem
            id={id}
            isCurrentItem={isCurrentItem}
            todoItem={todoItem}
            remainingTimeMins={remainingTimeMins}
            deleteAction={canBeDeleted ? deleteAction : undefined}
        />
    );
};

export default TodoListItemController;
