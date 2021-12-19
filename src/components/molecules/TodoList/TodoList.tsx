import React from 'react';

import TodoListItems from '../TodoListItems';
import TodoItemForm from '../TodoItemForm';
import TodoListSummary from '../../atoms/TodoListSummary';

const TodoList = () => {
    return (
        <div>
            <TodoItemForm />
            <div>
                <TodoListSummary />
                <TodoListItems />
            </div>
        </div>
    );
};

export default TodoList;
