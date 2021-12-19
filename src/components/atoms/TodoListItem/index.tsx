import React, { useContext } from 'react';

import TodoListItem from './TodoListItem';

import AppStateContext from '../../../domain/contexts/appState';

import { todoItemShape } from '../../../domain/entities/todoItems';

interface ITodoListItemController {
    todoItem: todoItemShape;
    isCurrentItem: boolean;
}

const TodoListItemController = (props: ITodoListItemController) => {
    const appState = useContext(AppStateContext);

    return (
        <TodoListItem
            {...props}
            itemDurations={appState.todoList.itemDurationsMins}
            currentTimerMs={appState.currentTimer.ellapsedMS}
        />
    );
}

export default TodoListItemController;
