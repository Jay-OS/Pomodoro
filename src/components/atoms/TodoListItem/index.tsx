import React, { useContext } from 'react';

import TodoListItem from './TodoListItem';

import TodoListStateContext from '../../../domain/contexts/todoListState';
import TimerContext from '../../../domain/contexts/timerState';

import { todoItemShape } from '../../../domain/entities/todoItems';

interface ITodoListItemController {
    todoItem: todoItemShape;
    isCurrentItem: boolean;
}

const TodoListItemController = (props: ITodoListItemController) => {
    const todoListState = useContext(TodoListStateContext);
    const timerState = useContext(TimerContext);

    return (
        <TodoListItem
            {...props}
            itemDurations={todoListState.itemDurationsMins}
            currentTimerMs={timerState.currentTimer.ellapsedMS}
        />
    );
}

export default TodoListItemController;
