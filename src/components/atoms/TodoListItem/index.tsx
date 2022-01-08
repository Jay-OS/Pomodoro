import React, { useContext, useState, useEffect } from 'react';

import TodoListItem from './TodoListItem';

import TodoListStateContext from '../../../domain/contexts/todoListState';
import TimerContext from '../../../domain/contexts/timerState';

interface ITodoListItemController {
    todoItemIndex: number;
}

const TodoListItemController = ({ todoItemIndex }: ITodoListItemController) => {
    const [itemDuration, setItemDuration] = useState<number>(0);
    const [isCurrentItem, setIsCurrentItem] = useState<boolean>(false);
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

    const remainingTimeMins = isCurrentItem
        ? itemDuration - currentTimerMinutes
        : itemDuration;

    return (
        <TodoListItem
            isCurrentItem={isCurrentItem}
            todoItem={todoItem}
            remainingTimeMins={remainingTimeMins}
        />
    );
};

export default TodoListItemController;
