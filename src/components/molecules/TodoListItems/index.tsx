import React, { useContext } from 'react';

import TodoListItems from './TodoListItems';

import AppStateContext from '../../../domain/contexts/appState';

const TodoListItemsController = () => {
    const appState = useContext(AppStateContext);
    
    return (
        <TodoListItems
            listItems={appState.todoList.withBreaks}
            currentItemIndex={appState.todoList.currentItemIndex}
        />
    );
};

export default TodoListItemsController;
