import React from 'react';
import { css } from 'aphrodite/no-important';

import TodoListItems from '../TodoListItems';
import TodoItemForm from '../TodoItemForm';
import TodoListSummary from '../../atoms/TodoListSummary';

import todoListStyles from './TodoListStyles';

const TodoList = () => {
    return (
        <section id="todoList-container" aria-labelledby="todoList-heading">
            <h2 id="todoList-heading" className={css(todoListStyles.hidden)}>To do list</h2>
            <TodoItemForm />
            <div id="todoList">
                <TodoListSummary />
                <TodoListItems />
            </div>
        </section>
    );
};

export default TodoList;
