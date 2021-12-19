import React, { useContext } from 'react';

import TodoListSummary from './TodoListSummary';

import AppStateContext from '../../../domain/contexts/appState';

const TodoListSummaryController = () => {
    const appState = useContext(AppStateContext);

    return (
        <TodoListSummary
            listItems={appState.todoList.withBreaks}
            itemDurations={appState.todoList.itemDurationsMins}
            currentItemIndex={appState.todoList.currentItemIndex}
            currentTimerMs={appState.currentTimer.ellapsedMS}
        />
    );
};


export default TodoListSummaryController;
