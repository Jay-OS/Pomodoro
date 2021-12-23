import React, { useContext } from 'react';

import TodoListItems from './TodoListItems';

import TodoListStateContext from '../../../domain/contexts/todoListState';

const TodoListItemsController = () => {
    const todoListState = useContext(TodoListStateContext);

    return (
        <TodoListItems
            listItems={todoListState.withBreaks}
            currentItemIndex={todoListState.currentItemIndex}
        />
    );
};

export default TodoListItemsController;
