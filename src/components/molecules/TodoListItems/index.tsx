import React, { useContext } from 'react';

import TodoListItems from './TodoListItems';

import TodoListStateContext from '../../../domain/contexts/todoListState';

const TodoListItemsController = () => {
    const todoListState = useContext(TodoListStateContext);

    return <TodoListItems listItems={todoListState.currentListState.list} />;
};

export default TodoListItemsController;
